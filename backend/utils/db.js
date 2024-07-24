
const mongoose = require("mongoose")

// URI = "mongodb://localhost:27017/admin"

URI = process.env.MONGODB_URI

// mongoose.connect(URI)

const connectDb =  async () => {
    try {
        await mongoose.connect(URI)    
        console.log("connection successfull")    
    } catch (error) {
        console.error("Database connection failed")
        process.exit(0) //exit from this code
    }
}

module.exports = connectDb