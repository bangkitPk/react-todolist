import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducers";

export default function InputTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    let newTodo = {
      value: input,
      status: false,
    };
    dispatch(addTodo(newTodo));

    setInput(""); // reset input
  };

  return (
    <div className="mb-10 max-[600px]:w-full">
      <input
        className="w-96 py-1 px-3 border-2 border-gray-300 rounded-sm focus:outline-none max-[600px]:w-full"
        type="text"
        value={input}
        placeholder="What to do"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="py-1 px-3 ml-5 bg-indigo-500 border-2 border-indigo-500 rounded-sm text-gray-50 transition-all hover:bg-gray-50 hover:text-indigo-500 max-[600px]:ml-0 max-[600px]:mt-2"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}
