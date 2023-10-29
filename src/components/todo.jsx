import { useDispatch } from "react-redux";
import { deleteTodo, updateTodoStatus } from "../redux/reducers/todo-reducers";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const handledelete = (e) => {
    e.preventDefault;
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdateStatus = () => {
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
        onClick={handleUpdateStatus}
      >
        {todo.status ? "✔️" : ""}
      </button>
      {todo.status == true ? (
        <div className="flex items-center justify-between w-[100%]">
          <span className="text-lg relative w-5/6">
            <span className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800"></span>
            {todo.value}
          </span>
          <button>
              <img
                src="./src/assets/delete.png"
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
              <img src="./src/assets/edit.png" alt="Edit" width={30} />
            </button>
            <button>
              <img
                src="./src/assets/delete.png"
                alt="Delete"
                width={30}
                onClick={handledelete}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
