import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  //trata a navegacao para a pagina de detalhes
  function onSeeDetailsClick(task) {
    const queryParams = new URLSearchParams();
    queryParams.set("title", task.title);
    queryParams.set("day", task.day);
    navigate(`/task?${queryParams.toString()}`);
  }

  //props é um objeto que contém todas as propriedades passadas para o componente
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => onTaskClick(task.id)}
            className={
              "bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${task.isCompleted && 'line-through'}"
            }
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
