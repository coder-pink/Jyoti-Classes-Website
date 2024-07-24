const User = require("../models/user-model")
const bcrypt = require("bcryptjs")
// Home 
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the normal class home")
    } catch (error) {
        console.log(error)
        
    }

}

//About
const about = async (req, res) => {

    try {
        res.status(200).send("About me section new")
    } catch (error) {
       res.status(400).send({msg : "Page not found"}) 
    }

}

// registration 
const register = async(req, res) => {
    console.log(req.body)
    // const data = req.body
    const {username, email, phone, password} = req.body

    const userExist = await User.findOne({ email})

    if(userExist){
        return res.status(400).json({msg : "email already existed"})
    }

    const newUser = await User.create({username, email, phone, password})
    try {
        const token = await newUser.generateToken()
        res.status(200).json({msg : "registration successfull", token : token, userId : newUser._id.toString()})
    } catch (error) {
        res.status(500).json("Server error")
    }
}





// Login

const login = async (req, res) => {
    try {
        const {email, password} = req.body

        //email valid or not
        const userExist = await User.findOne({email})

        if(!userExist){
            return res.status(400).json({msg : "invalid crediential"})
        }

        // let isPasswordValid = await bcrypt.compare(password, userExist.password)
        const isPasswordValid = await userExist.comparePassword(password)

        if(isPasswordValid){
            res.status(200).json({
                msg : "Login Successfull",
                token : await userExist.generateToken(),
                userId : await userExist._id.toString(),
            })
        }else{
            res.status(401).json({msg : "Invalid email or password"})
        }

    } catch (error) {
        res.status(500).json("Server error")
    }
}


module.exports = {home, about, register, login}