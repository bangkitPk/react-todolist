import InputTodo from "./components/input-todo";
import ListTodo from "./components/list-todo";

function App() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-zinc-800 mb-20">
          What's the plan for today?
        </h1>
        <InputTodo />
        <ListTodo />
      </div>
    </div>
  );
}

export default App;
