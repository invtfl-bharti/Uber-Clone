const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "First name must be atleast 2 characters"],
    },
    lastname: {
      type: String,
      minlength: [3, "First name must be atleast 2 characters"],
    }
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        minlength:[5, 'Email must be atleast 5 character'],
    },

    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be atleast 5 character'],
        select: false
    },

    socketId: {
        type: String
    },
});


userSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
