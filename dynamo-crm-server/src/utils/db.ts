import mongoose from "mongoose";

const connectToDb = async () => {
  return mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((err) => {
      console.log("could not connect to mongoDb", err.stack);
    });
};

const disConnectToDb = async () => {
  mongoose.disconnect().then(() => {
    console.log("Disconnected from mongodb");
  });
};

export { connectToDb, disConnectToDb };
