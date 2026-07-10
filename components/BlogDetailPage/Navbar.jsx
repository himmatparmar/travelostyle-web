export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2C3078] h-[16px] flex items-center justify-between px-[60px] text-white text-[10px] font-medium">
        <p>
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex gap-4">
          <span>FAQs</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-[60px] py-[12px] border-b border-[#2B2B2B]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-[22px] tracking-wide font-serif">
            TRAVELOSTYLE
          </h1>

          {/* Menu */}
          <div className="flex items-center gap-8 text-[13px] text-[#222]">
            <a href="#">About</a>
            <a href="#">Group Journeys</a>
            <a href="#">Private Journeys</a>
            <a href="#">Tailor-made Journeys</a>
            <a href="#">All Journeys</a>
            <a href="#">Destinations</a>
            <a href="#">Offers</a>
          </div>
        </div>
      </div>
    </>
  );
}