const Joi = require('joi');

// More robust production-ready schema with stricter password policy and clear error messages
const userValidationSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(32)
        .trim()
        .required()
        .messages({
            'string.base': 'Username must be a string.',
            'string.alphanum': 'Username must only contain alphanumeric characters.',
            'string.empty': 'Username cannot be empty.',
            'string.min': 'Username must be at least 3 characters.',
            'string.max': 'Username must be at most 32 characters.',
            'any.required': 'Username is required.'
        }),
    password: Joi.string()
        .min(8)
        .max(128)
        .pattern(new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*]).+$'))
        .required()
        .messages({
            'string.base': 'Password must be a string.',
            'string.empty': 'Password cannot be empty.',
            'string.min': 'Password must be at least 8 characters.',
            'string.max': 'Password must be at most 128 characters.',
            'string.pattern.base': 'Password must include uppercase, lowercase, number and special character.',
            'any.required': 'Password is required.'
        }),
    avatar: Joi.string()
        .uri({ allowRelative: true })
        .allow('')
        .optional()
        .messages({
            'string.uri': 'Avatar must be a valid URI.'
        })
});

// Robust validation utility function
function validateUser(user) {
    // Use abortEarly: false to return all validation errors, not just the first
    return userValidationSchema.validate(user, { abortEarly: false, stripUnknown: true });
}

module.exports = {
    validateUser,
    userValidationSchema
};