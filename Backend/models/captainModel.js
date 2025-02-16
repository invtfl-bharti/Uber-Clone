const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CaptainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      unique: true,
      minLength: [3, "First name must be atleast 3 characters or long"],
    },
    lastname: {
      type: String,
      unique: true,
      minlength: [3, "Last name must be atleast 3 characters or long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },

  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 characters or long"],
      },
      plate: {
          type: String,
          required: true,
          minlength:[5, 'Plate must be atleast 5 characters or long'],
      },
      capacity: {
          type: Number,
          required: true,
          minlength:[1, 'Capacity must be atleast 1'],
      },
      vehicleType: {
          type: String,
          required: true,
          enum:['car','motorcycle','auto']
      },

      location: {
          lat: {
              type:Number,
          },
          lng: {
              type:Number
          }
      }
  },
});

CaptainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return token;
}

CaptainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

CaptainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}




const captainModel = mongoose.model('captain', CaptainSchema);

module.exports = captainModel;