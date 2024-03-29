const movieRouter = require('./routes/movie.js')
const userRouter = require('./routes/user.js')
const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())

app.use('/movie/', movieRouter)
app.use('/user/', userRouter)

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
})

