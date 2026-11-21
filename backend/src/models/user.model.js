
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            lowercase: true,
            trim: true,
            minlength: [3, "Username must be at least 3 characters"],
            maxlength: [30, "Username cannot exceed 30 characters"]
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
            maxlength: [50, "Password cannot exceed 50 characters"]
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please enter a valid email address"
            ]
        }
    },
    {
        timestamps: true
    }
);

// Hash password before saving the user
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

// Compare entered pass with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
