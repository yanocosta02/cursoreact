import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite o dia da tarefa"
        value={day}
        onChange={(event) => setDay(event.target.value)}
      />
      <button
        onClick={() => {
          //verificar seo título ou dia estão vazios
          if (!title.trim() || !day.trim()) {
            alert("Preencha todos os campos!");
            return;
          }
          onAddTaskSubmit(title, day);
          //Limpar os campos
          setTitle("");
          setDay("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
