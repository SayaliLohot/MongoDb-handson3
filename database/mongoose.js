const mongoose = require("mongoose")

const url = 'mongodb://127.0.0.1:27017/Human_Resource2'

const connect = async ()=>{
    try {
        await mongoose.connect(url)
        
    } catch (error) {
        console.log("error", error.message)
    }
}

module.exports = connect
