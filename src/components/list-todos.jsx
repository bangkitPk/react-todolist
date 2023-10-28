import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./filter-button";
import { getTodo } from "../redux/reducers/todo-reducers";
import { useEffect } from "react";
import Todo from "./todo";

export default function ListTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodo());
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-start gap-5">
        <FilterButton text={"ALL"} />
        <FilterButton text={"ACTIVE"} />
        <FilterButton text={"COMPLETED"} />
      </div>
      <div>
        {
          todos.map(todo => (<Todo key={todo.id} todo={todo} />))
        }
      </div>
    </div>
  );
}
