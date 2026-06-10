export default function SearchBar() {
  return (
    <div className="w-[92%] mx-auto flex justify-center gap-3 py-3">
      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>How do you want to travel?</option>
      </select>

      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>When do you want to travel?</option>
      </select>

      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>Where do you want to travel?</option>
      </select>

      <button className="h-[40px] w-[160px] rounded-full bg-[#2E348D] text-white">
        Find Your Journey
      </button>
    </div>
  );
}