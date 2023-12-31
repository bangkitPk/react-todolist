import { useDispatch } from "react-redux";
import { PropTypes } from "prop-types";
import EditModal from "./edit-modal";
import { useState } from "react";
import { deleteTodo, updateTodoStatus } from "../redux/actions/todo-actions";
import editImg from "../assets/edit.png";
import deleteImg from "../assets/delete.png"

export default function Todo({ todo }) {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setOpenModal(true)
  }

  const updateStatus = () => {
    const updatedTodo = {
      ...todo,
      status: !todo.status
    }
    dispatch(updateTodoStatus(todo.id, updatedTodo));
  };

  return (
    <div className="px-4 py-3 mt-5 flex items-center border-2 border-gray-300 rounded-sm gap-3">
      <button
        className="border-2 border-gray-300 rounded-sm h-10 w-10 hover:bg-gray-300 duration-300"
        onClick={updateStatus}
      >
        {todo.status ? "✔️" : ""}
      </button>
      {todo.status ? (
        <div className="flex items-center justify-between w-[100%]">
          <span className="text-lg relative w-5/6">
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800"></span>
            {todo.value}
          </span>
          <button>
              <img
                src={deleteImg}
                alt="Delete"
                width={30}
                onClick={handledelete}
              />
            </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-[100%]">
          <span className="text-lg">{todo.value}</span>
          <div>
            <button className="mr-2">
              <img src={editImg} alt="Edit" width={30} onClick={handleEdit}/>
            </button>
            <button>
              <img
                src={deleteImg}
                alt="Delete"
                width={30}
                onClick={handledelete}
              />
            </button>
          </div>
        </div>
      )}

      {openModal && <EditModal setOpenModal={setOpenModal} todo={todo}/>}
    </div>
  );
}


Todo.propTypes = {
  todo: PropTypes.object,
}