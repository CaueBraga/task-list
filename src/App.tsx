import { useState } from "react";
import "./index.css";
import { Task } from "./Task";

import rocket from "./assets/rocket.svg";
import todo from "./assets/todo.svg";

function App() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue("");
  }

  function handleDelete(itemToDelete: any) {
    const newTasks = tasks.filter((item) => item.text !== itemToDelete);
    setTasks(newTasks);
  }

  function handleChecked(text: any) {
    const newArray = [];

    for (let i = 0; i < tasks.length; i++) {
      if (text !== tasks[i].text) {
        newArray.push(tasks[i]);
      } else if (text === tasks[i].text) {
        const taskChecked = { text: tasks[i].text, completed: true };
        newArray.push(taskChecked);
      }
    }
    setTasks(newArray);
  }

  return (
    <>
      <header className="bg-black h-44 w-full flex items-center justify-center">
        <div className="flex gap-1">
          <img src={rocket} alt="" />
          <img src={todo} alt="" />
        </div>
      </header>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-72 w-72 mx-auto gap-4"
      >
        <input
          className="border-none resize-none bg-black p-1 rounded-md border-black text-white"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>

      <div className=" w-1/3 rounded-md mx-auto">
        <ul>
          {tasks.map((item) => (
            <Task
              completed={item.completed}
              text={item.text}
              handleDelete={handleDelete}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
