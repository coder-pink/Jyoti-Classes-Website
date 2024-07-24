// await schema.parseAsynce(req.body) is line where we use zod to validate the request body against the defined schema

// .parse(data : unknown) : T

// given any zod schema, you can call its parse method to check 'data' is valid. if it is , value is returend with full information otherewise error is thrown

//.parseAsync(data : unknown) : Promise<T>


const validate = (schema) => async (req, res, next) => {

    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const status = 444

        const message = "Fill the input"
        const extraDetails = err.errors[0].message;
        const error = {
            status, message, extraDetails
        }
        console.log(error)
        // res.status(400).json({msg : message})
        next(error)
    }

}



module.exports = validate