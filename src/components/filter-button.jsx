export default function FilterButton({ text, selectedFilter, onClick }) {
  let isActive = text == selectedFilter;

  return (
    <button
      className={`px-3 py-[.1em] rounded-2xl text-white ${
        isActive ? "bg-teal-600" : "bg-gray-600"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
