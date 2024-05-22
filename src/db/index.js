import mongoose from "mongoose";

const dbConnect = async () => {
  try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`, {dbName: "Ecommerce"});

    console.log("MONGODB connected successfully ", connectionInstance.connection.host);
  }
  catch (error) {
    console.log("MONGODB connection failed ", error.message);
    process.exit(1);
  }
}

export {dbConnect};