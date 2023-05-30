"use client";

import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function AddTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTitle("");
    setDescription("");
  };

  const handleAddTask = () => {
    // Aqui você pode adicionar a lógica para adicionar a tarefa
    console.log("Adicionar tarefa:", title, description);
    handleModalClose();
  };

  return (
    <div>
      <div
        className="flex items-center gap-4 mb-6 hover:cursor-pointer"
        onClick={handleModalOpen}
      >
        <BsFillPlusSquareFill className="w-12 h-12 text-[#5BC400]" />
        <h2 className="text-4xl font-semibold text-[#5BC400]">
          Adicionar uma nova tarefa
        </h2>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl text-[#5BC400] font-semibold mb-4">
              Adicione a Tarefa
            </h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição"
              className="w-full h-32 mb-4 px-4 py-2 border border-gray-300 rounded"
            ></textarea>
            <div className="flex justify-end">
              <FaPlus
                onClick={handleAddTask}
                className="w-8 h-8 rounded mr-3 text-[#5BC400] hover:cursor-pointer"
              />
              <FaTrash
                onClick={handleModalClose}
                className="w-8 h-8 rounded text-[#5BC400] hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
