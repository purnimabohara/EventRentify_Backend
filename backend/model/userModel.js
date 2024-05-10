const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true,
    }, 
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    contactNumber:{
      type: Number,
      required: false,
  },
    address:{
      type: String,
      required: false,
  },
    
    password:{
        type:String,
        required: true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    avatar: {
      type: String,
      
  },
    is_verified: {
        type: Number,
        default: 0
    },
    booking: [
      {
        type: Schema.Types.ObjectId,
        ref: 'bookings',
      },
    ],
    token:{
        type: String,
        default:''
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});
userSchema.methods.generateToken = async function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  };
userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
  
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };

const Users = mongoose.model('users', userSchema);
module.exports = Users;