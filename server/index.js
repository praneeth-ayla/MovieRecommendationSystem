const movieRouter = require('./routes/movie.js')
const userRouter = require('./routes/user.js')
const express = require('express')
const cors = require('cors')

const app = express()


app.use(express.json())
app.use(cors())

app.use('/movie/', movieRouter)
app.use('/user/', userRouter)




app.listen(3000, () => {
    console.log("server is running on port 3000")
})

