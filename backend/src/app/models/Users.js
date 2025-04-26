import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema(
    {
        _id: { type: ObjectId },
        name: { type: String, maxLength: 255, required: true, default: "" },
        email: {
            type: String,
            maxLength: 255,
            required: true,
            default: "",
            validate: {
                validator: (v) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
                message: (props) => `${props.value} không phải email hợp lệ!`,
            },
        },
        password: {
            type: String,
            maxLength: 255,
            required: true,
            default: "",
            validate: {
                validator: (v) => v.length >= 6,
                message: (props) => `${props.value} phải có ít nhất 6 ký tự!`,
            },
        },
        role: { type: String, enum: ["admin", "user"], default: "user" },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
        lastLogin: Date,
        isVerified: { type: Boolean, default: false },
    },
    {
        _id: false,
        timestamps: true,
    }
);

userSchema.index({ email: 1 });
const User = mongoose.model("User", userSchema);

export default User;
