const {z} = require("zod")

// creating object schema

const signupSchema = z.object({
    username : z.string({required_error : "username is required"}).trim()
    .min(3, {message : "username must be atleast 3 characters"})
    .max(255, {message : "username must not be more than 255 characters"}),

    email : z.string({required_error : "Email is required"})
    .trim()
    .email({message : "Invalid email address"})
    .min(3, {message : "email must be atleast 3 characters"})
    .max(255, {message : "email must not be more than 255 characters"}),

    phone : z.string({required_error : "phone number is required"})
    .trim()
    .min(10, {message : "phone number must be atleast 10 characters"})
    .max(20, {message : "phone number must not be more than 20characters"}),

    password : z.string({required_error : "Password is required"})
    .min(7, {message : "password must be atleast 7 characters"})
    .max(1024, {message : "password must not be more than 1024 characters"}),
})


module.exports = signupSchema