"use client";
import TaskContainer from "../components/TaskContainer";

export default function Home() {
  return (
    <main className="container min-h-[70vh] flex-col items-end justify-center p-24">
      <TaskContainer></TaskContainer>
    </main>
  );
}
