import Task from "../models/Task.js";

export const addTask = async (req, res, next) => {
  const { title, description, status, priority, dueDate } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !status &&
    status.trim() === "" &&
    !priority &&
    priority.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  if (!dueDate) {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  let task;
  try {
    task = new Task({
      title: title.trim(),
      description: description,
      status: status,
      priority: priority,
      dueDate: new Date(dueDate).toISOString().split("T")[0],
    });
    task = await task.save();
  } catch (e) {
    return console.log(e);
  }
  if (!task) {
    return res.status(500).json({ message: "Unexpected error occured" });
  }
  return res.status(201).json({ task });
};



export const getTask = async (req, res, next) => {
  const id = req.params.id;

  let tasks;
  try {
    if (id && id.trim() !== "") {
      tasks = await Task.findById(id);
    } else {
      tasks = await Task.find();
    }
  } catch (e) {
    return console.log(e);
  }
  if (!tasks) {
    return res.status(500).json({ message: "request failed" });
  }
  return res.status(200).json({ tasks });
};

export const updateTask = async (req, res, next) => {
  const id = req.params.id;
  const { title, description, status, priority, dueDate } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === "" &&
    !status &&
    status.trim() === "" &&
    !priority &&
    priority.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid inputs" });
  }
  if (!dueDate) {
    return res.status(422).json({ message: "Invalid inputs" });
  }

  let task;
  try {
    task = await Task.findByIdAndUpdate(id, {
      title,
      description,
      status,
      priority,
      dueDate,
    });
  } catch (e) {
    return console.log(e);
  }

  if (!task) {
    return res.status(500).json({ message: "something went wrong" });
  }
  return res.status(200).json({ message: "Updated successfully" });
};

export const deleteTask = async (req, res, next) => {
  const id = req.params.id;

  let task;
  try {
    task = await Task.findByIdAndDelete(id);
  } catch (e) {
    return console.log(e);
  }

  if (!task) {
    return res.status(500).json({ message: "something went wrong" });
  }
  return res.status(200).json({ message: "Deleted successfully" });
};
