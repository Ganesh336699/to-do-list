import express from "express";
import { addTask, getTask, updateTask ,deleteTask} from "../controllers/task-controller.js";



const taskRouter = express.Router();

taskRouter.post("/add" , addTask);
taskRouter.get("/:id?" , getTask);
taskRouter.put("/:id" , updateTask);
taskRouter.delete("/:id" , deleteTask);


export default taskRouter;