import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodoValue } from "../redux/actions/todo-actions";

export default function EditModal({ setOpenModal, todo }) {
  const [editedTodo, setEditedTodo] = useState(todo.value);
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false);
  };

  const editTodo = () => {
    const newEditedTodo = {
      ...todo,
      value: editedTodo,
    };
    dispatch(editTodoValue(todo.id, newEditedTodo));
    setOpenModal(false);
  };

  return (
    <div className="bg-gray-600 bg-opacity-20 w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-slate-50 py-8 px-8 w-fit rounded-xl">
        <div>
          <input
            className="w-96 py-1 px-3 border-2 border-gray-300 rounded-sm focus:outline-none max-[600px]:w-full"
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button
            className="w-24 py-1 bg-gray-500 border-2 border-gray-500 rounded-sm text-white transition-all"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button className="w-24 py-1 bg-indigo-500 border-2 border-indigo-500 rounded-sm text-white transition-all" onClick={editTodo}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
