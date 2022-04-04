import { React, useState } from "react";

export const ToDoList = () => {
  const [toDo, setToDo] = useState(""); //input에 적용되는 새로운 ToDo
  const [toDos, setToDos] = useState([]); // 기존에 가지고 있는 ToDoList
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li value={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
