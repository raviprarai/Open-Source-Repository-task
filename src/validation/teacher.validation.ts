
import Joi from "joi";

export const createTeacherSchema = Joi.object({
    fullName: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
            "string.empty": "Full name is required.",
            "string.min": "Full name must be at least 2 characters.",
            "string.max": "Full name cannot exceed 100 characters.",
            "any.required": "Full name is required.",
        }),

    email: Joi.string()
        .trim()
        .email()
        .lowercase()
        .max(254)
        .required()
        .messages({
            "string.empty": "Email is required.",
            "string.email": "Please enter a valid email address.",
            "string.max": "Email cannot exceed 254 characters.",
            "any.required": "Email is required.",
        }),

    specialization: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .messages({
            "string.empty": "Specialization is required.",
            "string.min": "Specialization must be at least 2 characters.",
            "string.max": "Specialization cannot exceed 100 characters.",
            "any.required": "Specialization is required.",
        }),

    experience: Joi.number()
        .strict()
        .integer()
        .min(0)
        .max(60)
        .required()
        .messages({
            "number.base": "Experience must be a number.",
            "number.integer": "Experience must be a whole number.",
            "number.min": "Experience cannot be negative.",
            "number.max": "Experience cannot exceed 60 years.",
            "any.required": "Experience is required.",
        }),
}).unknown(false);
