const express = require('express');
const router = express.Router();
const { spawn } = require('child_process');
const { User } = require('../db.js')
const { authMiddleware } = require('../middleware.js')


router.put('/', authMiddleware, async (req, res) => {
    try {
        const watchedList = req.body.watchedList;

        // Find the user by userId (req.userId) and update their previouslyWatched field
        const response = await User.updateOne(
            { _id: req.userId }, // Find user by userId
            { $push: { previoulyWatched: { $each: watchedList } } } // Push each movie in movieList to previouslyWatched array
        );

        res.status(200).json({ message: "Movies added to previously watched list" });
    } catch (error) {
        console.log(req.body.watchedList)
        console.error("Error updating previously watched movies:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.get('/watched-list', authMiddleware, async (req, res) => {
    // const userData = User.findOne({ _id: req.userId })
    const userData = await User.findOne({ _id: req.userId });
    const watchedList = userData.previoulyWatched;
    res.json({
        watchedList
    })
})


router.get('/', authMiddleware, async (req, res) => {
    // Extract the watched list from the request body
    // const watchedList = req.body.watchedList;
    const userData = await User.findOne({ _id: req.userId });
    const watchedList = userData.previoulyWatched;


    // Run Python script with the watched list as input
    const pythonProcess = spawn('python3', ['/home/ran/repos/movieRecommendation/server/mlAlgo/main.py'], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'] // Enable inter-process communication
    });

    // Send the watched list to the Python script
    pythonProcess.stdin.write(JSON.stringify({ watchedList }) + '\n');
    pythonProcess.stdin.end();

    // Capture the output of the Python script
    let recommendations = '';
    pythonProcess.stdout.on('data', (data) => {
        recommendations += data.toString();
    });

    // Handle errors from the Python script
    pythonProcess.stderr.on('data', (data) => {
        console.error('Error executing Python script:', data.toString());
        // res.status(500).send('Internal Server Error'); // Remove or comment out this line
    });

    // When the Python script exits
    pythonProcess.on('close', (code) => {
        try {
            recommendations = JSON.parse(recommendations);
            res.status(200).json({ recommendations });
        } catch (error) {
            console.error('Error parsing recommendations:', error);
            res.status(500).send('Internal Server Error');
        }
    });
});

router.delete('/', authMiddleware, async (req, res) => {
    try {
        const deleteList = req.body.deleteList; // Assuming deleteList contains the elements to be deleted

        const response = await User.updateOne(
            { _id: req.userId },
            { $pull: { previouslyWatched: { $in: deleteList } } }
        );

        res.status(200).json({ message: "Selected items deleted from previously watched list" });
    } catch (error) {
        console.error("Error deleting selected items from previously watched list:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


module.exports = router;

