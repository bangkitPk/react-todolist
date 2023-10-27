export default function InputTodo() {
  return (
    <div className="mb-10">
      <input
        className="w-96 py-1 px-3 border-2 border-gray-300 rounded-sm focus:outline-none"
        type="text"
        placeholder="What to do"
      />
      <button className="py-1 px-3 ml-5 bg-indigo-500 border-2 border-indigo-500 rounded-sm text-gray-50 transition-all hover:bg-gray-50 hover:text-indigo-500">Add</button>
    </div>
  );
}
