import mongoose from "mongoose";

const connectDB = async () => {
  const DB_NAME = "oldAgeManagement";
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/oldAgeManagement`
    );
    // console.log(connectionInstance);
    console.log(
      `\nMONGODB connected !! DB NAME: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB error occured: ", error);
    process.exit(1);
  }
};

export default connectDB;
