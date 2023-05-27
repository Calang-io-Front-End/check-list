"use client";
import { FC, useState } from "react";
import Item from "./Item";
import useTodoStore from "store/todoStore";

interface CardProps {
  title: string;
}

const Card: FC<CardProps> = ({ title }) => {
  const { todos, addNewTodo, deleteTodo } = useTodoStore();
  const [draftTodoItem, setDraftTodoItem] = useState({
    text: "",
    isDraft: false
  });

  function handleCreateDraftItem() {
    setDraftTodoItem({ ...draftTodoItem, isDraft: true });
  }

  function handleSubmitItem() {
    addNewTodo(draftTodoItem.text);
    setDraftTodoItem({ text: "", isDraft: false });
  }

  return (
    <div
      className={
        "bg-white w-full max-w-xs min-w-min min-h-[260px] flex flex-col rounded-lg overflow-hidden relative"
      }
    >
      <h2
        className={
          "bg-[rgba(91,196,0,0.85)] flex items-center whitespace-nowrap overflow-hidden h-11 text-[#081F2C] text-2xl font-medium px-4 mb-3"
        }
      >
        {title}
      </h2>
      {draftTodoItem.isDraft && (
        <div className="px-1 flex">
          <input
            type="text"
            placeholder="Digite sua nota"
            onChange={(event) =>
              setDraftTodoItem({
                ...draftTodoItem,
                text: event.target.value
              })
            }
            className="bg-white text-[#081F2C] outline-none border-2 border-slate-300 w-full"
          />
          <button className="w-8 ml-px bg-green-600" onClick={handleSubmitItem}>
            v
          </button>
        </div>
      )}
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id}>
          {todo.text}
        </Item>
      ))}
      <button
        className="text-[#081F2C] h-7 bg-gradient-to-b from-white to-slate-300 text-lg font-bold w-full bottom-0 absolute"
        onClick={handleCreateDraftItem}
      >
        +
      </button>
    </div>
  );
};

export default Card;
