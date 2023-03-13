import { connect } from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI as string);

    console.log("Database connection successful.");
  } catch (error) {
    console.error("Database connection error: ", error);
  }
};
