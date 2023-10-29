import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./filter-button";
import { useEffect, useState } from "react";
import Todo from "./todo";
import { getTodo } from "../redux/actions/todo-actions";

export default function ListTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  const [selectedFilter, setSelectedFilter] = useState("ALL"); // Default filter
  const [todosFiltered, setTodosFiltered] = useState([]);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  useEffect(() => {
    filterTodos();
  }, [selectedFilter, todos]);

  const filterTodos = () => {
    let filteredTodos = todos.filter((todo) => {
      if(selectedFilter == "ALL"){
        return true;
      }else if(selectedFilter == "ACTIVE"){
        return !todo.status;
      }else if(selectedFilter == "COMPLETED"){
        return todo.status;
      }
    })
    setTodosFiltered(filteredTodos);
  }

  return (
    <div className="w-full">
      <div className="flex justify-start gap-5">
        <FilterButton
          text={"ALL"}
          selectedFilter={selectedFilter}
          onClick={() => setSelectedFilter("ALL")}
        />
        <FilterButton
          text={"ACTIVE"}
          selectedFilter={selectedFilter}
          onClick={() => setSelectedFilter("ACTIVE")}
        />
        <FilterButton
          text={"COMPLETED"}
          selectedFilter={selectedFilter}
          onClick={() => setSelectedFilter("COMPLETED")}
        />
      </div>
      <div>
        {todos.length == 0 || todosFiltered.length == 0 ? (
          <p className="mt-5">There's no to-do list yet.</p>
        ) : (
          todosFiltered.map((todo) => <Todo key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}
