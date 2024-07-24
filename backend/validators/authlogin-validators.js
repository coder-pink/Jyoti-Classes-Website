const {z} = require('zod')


const signinSchema = z.object({
    email : z.string({required_error : "Please enter the Email "})
    .trim()
    .email({message : "Invalid email address"})
    .min(3, {message : "email must be atleast 3 characters"})
    .max(255, {message : "email must not be more than 255 characters"}),

    password : z.string({required_error : "Password is required"})
    .min(7, {message : "password must be atleast 7 characters"})
    .max(1024, {message : "password must not be more than 1024 characters"}),
})


module.exports = signinSchema