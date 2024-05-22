import mongoose from "mongoose";

type Connection = {
  isConnected?: Number;
};

const connection: Connection = {};

export async function connectToMongoose() {
  try {
    if (connection.isConnected) {
      console.log("connected with previous connection");
      return;
    }

    const db = await mongoose.connect(
      (process.env.DATABASE_URL as string) || ""
    );

    connection.isConnected = db.connections[0].readyState;

    console.log("connected with new connection");
  } catch (error: any) {
    console.log("Error in connnectTomongodb");
  }
}
