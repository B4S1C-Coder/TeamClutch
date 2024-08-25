const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    description: { type: String, default: "I'm default user." }
},{
    timestamps: true
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password") || this.isNew) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
            next();
        } catch (err) {
            next(err);
        }
    } else {
        next();
    }
});

userSchema.methods.comparePassword = async function (toCheckPassword) {
    return await bcrypt.compare(toCheckPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);