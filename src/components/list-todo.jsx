import FilterButton from "./filter-button";

export default function ListTodo() {
  return (
    <div className="w-full">
      <div className="flex justify-start gap-4">
        <FilterButton text={"ALL"}/>
        <FilterButton text={"ACTIVE"}/>
        <FilterButton text={"COMPLETED"}/>
      </div>
    </div>
  );
}
