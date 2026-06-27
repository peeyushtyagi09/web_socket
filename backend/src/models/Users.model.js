const mongoose = require("mongoose");

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 32
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false // don't return password by default
    },
    avatar: {
        type: String, // URL or path to the avatar image
        default: ""
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create and export the User model
const User = mongoose.model("User", UserSchema);

module.exports = User;