export default function TopBar() {
  return (
     <div className="flex items-center justify-between bg-[#2E2787] px-14 py-2 text-[11px] text-white">
        <p>
          Speak to our travel advisor (773) 983-8067 | open 10am-7pm CST
        </p>

        <div className="flex items-center gap-6">
          <button>FAQs</button>
          <button>Contact Us</button>
        </div>
      </div>
  );
}