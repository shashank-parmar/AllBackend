const Joi = require('@hapi/joi')

exports.authSchema = Joi.object({
    name:Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(4).required()
})
