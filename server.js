const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const connectDb = require("./config/connectDb")
dotenv.config();
//database cell
connectDb();
//rest oject
const app = express()

//middleware 
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.use('/api/v1/users', require('./routers/user-route'))
    //port
const PORT = 8000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on server${PORT}`)
});