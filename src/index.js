import dotenv from "dotenv";
import { dbConnect } from "./db/index.js";
import {User} from "./ecommerce/user_schema.js";
dotenv.config({ path: '../.env' });

await dbConnect();

/*
const user1 = new User({
  username: "Souradip",
  email: "souradip@123",
  password: "12345"
});
*/

// const user =  await user1.save();

const deletedUser = await User.deleteOne({username: "souradip"})
console.log(deletedUser)

