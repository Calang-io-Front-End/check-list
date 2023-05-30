"use client";
import { useState } from "react";
import { ITask } from "../interfaces/ITask";
import { AddTask } from "./AddTask";
import { TaskList } from "./TaskList";

export default function TaskContainer() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AddTask handleAddTask={handleAddTask} />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
