/** @format */
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Bookroute from "./Route/Book.route.js";
import UserRoute from "./Route/UserRoute.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// connect to mongodb server
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb server");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", Bookroute);
app.use("/users", UserRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
