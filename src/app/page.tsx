"use client"
import AddTask from "components/AddTask";
import Card from "components/Card";
import Item from "components/Item";
import TaskList from "../components/TaskList";
import TaskContainer from "../components/TaskContainer";

export default function Home() {
  return (
    <main className="container min-h-[70vh] flex-col items-end justify-center p-24">
      <TaskContainer></TaskContainer>
    </main>
  );
}
