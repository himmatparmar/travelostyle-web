export default function SearchBar() {
  return (
    <div className="px-14 py-3 border-b border-[#d6d6d6]">
      <div className="flex gap-4">
        <select
          defaultValue=""
          className="flex-1 h-10 border border-[#d0d0d0] px-3 text-[13px] text-gray-500 bg-white"
        >
          <option value="" disabled>How do you want to travel?</option>
          <option>Group Journey</option>
          <option>Private Journey</option>
          <option>Tailor-Made Journey</option>
          <option>Cruises</option>
          <option>Land &amp; Rail Journeys</option>
          <option>Private Jet Journeys</option>
        </select>

        <select
          defaultValue=""
          className="flex-1 h-10 border border-[#d0d0d0] px-3 text-[13px] text-gray-500 bg-white"
        >
          <option value="" disabled>When do you want to travel?</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <select
          defaultValue=""
          className="flex-1 h-10 border border-[#d0d0d0] px-3 text-[13px] text-gray-500 bg-white"
        >
          <option value="" disabled>Where do you want to travel?</option>
          <option>Morocco</option>
          <option>Orlando</option>
          <option>Las Vegas</option>
          <option>Cancun</option>
          <option>India</option>
          <option>Africa</option>
        </select>

        <button className="h-10 px-8 rounded-full bg-[#2E348D] text-white text-[14px] font-medium whitespace-nowrap">
          Find Your Journey
        </button>
      </div>
    </div>
  );
}
