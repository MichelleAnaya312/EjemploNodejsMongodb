import { connect } from "mongoose";

import { config } from "dotenv";

config()

const MONGODB_URI = process.env.MONGODB_URI;

//console.log(MONGODB_URI);

(async () => {
  try {
    //const db = await connect("mongodb://localhost:27017/crud-mongo");
    const db = await connect(MONGODB_URI);
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
