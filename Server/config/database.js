import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connect = () => {
  mongoose
    .connect(process.env.MDB_URL)
    .then(() => console.log("DB connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Error");
      console.error(error);
      process.exit(1);
    });
};
