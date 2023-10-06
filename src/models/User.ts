import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface UserInterface {
  _id: string;
  name: string;
  telephone: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  verificationToken: string;
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    //   default:
    //     "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png",
    // },
    role: {
      type: String,
      required: true,
      default: "normal",
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
    },
    cash: {
      type: Number,
      required: true,
      default: 0,
    },
    fcmToken: {
      type: String,
      default: null,
    },
    connectedDevices: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// UserSchema.methods.matchPassword = async function (enteredPassword: string) {
//   const isValid = bcrypt.compare(enteredPassword, this.password);
//   return isValid;
// };

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);

export default User;
