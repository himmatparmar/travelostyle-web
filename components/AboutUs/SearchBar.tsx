export default function SearchBar() {
  return (
    <div className="flex justify-center gap-3 py-3">
      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>How do you want to travel?</option>
      </select>

      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>When do you want to travel?</option>
      </select>

      <select className="w-[250px] h-[40px] border border-[#d0d0d0] px-3 text-[13px] text-gray-500">
        <option>Where do you want to travel?</option>
      </select>

      <button className="h-[40px] px-8 rounded-full bg-[#312783] text-white font-medium">
        Find Your Journey
      </button>
    </div>
  );
}