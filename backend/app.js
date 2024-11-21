import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./Routes/user-routes.js";
import taskRouter from "./Routes/task-routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/tasks" , taskRouter);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(
    `mongodb+srv://koreganesh114:${process.env.MONGODB_PASSWORD}@todocluster.rgevk.mongodb.net/`
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log(`connected to DB and localhost port ${5000}`);
    })
  )
  .catch((e) => console.log(e));
