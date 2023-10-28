import FilterButton from "./filter-button";

export default function ListTodos() {
  return (
    <div className="w-full">
      <div className="flex justify-start gap-5">
        <FilterButton text={"ALL"} />
        <FilterButton text={"ACTIVE"} />
        <FilterButton text={"COMPLETED"} />
      </div>
      <div>
        <div className="px-4 py-3 mt-5 flex items-center border-2 border-gray-300 rounded-sm gap-3">
          <button className="border-2 border-gray-300 rounded-sm h-10 w-10"></button>
          <div className="flex items-center justify-between w-[100%]">
            <span className="text-lg">Watch Movies</span>
            <div>
              <button className="mr-2"><img src="./src/assets/edit.png" alt="Edit" width={30}/></button>
              <button><img src="./src/assets/delete.png" alt="Delete" width={30}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
