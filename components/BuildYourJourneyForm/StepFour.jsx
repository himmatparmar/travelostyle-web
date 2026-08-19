export default function StepFour({ formData, updateField }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-[18px] font-[600] leading-[21px] tracking-[0.05em] text-[#1A1A1A]">
        Finally, tell us how to connect with you
      </h3>
      <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-8">
        
     
        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            First Name<span className="text-[11px] align-top">*</span>
          </label>
          <input
            type="text"
            value={formData.firstName || ""}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Your First Name"
            required
            className="w-full border-b border-[#1A1A1A] bg-transparent pb-1 pt-1 text-[13.5px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Last Name<span className="text-[11px] align-top">*</span>
          </label>
          <input
            type="text"
            value={formData.lastName || ""}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Your Last Name"
            required
            className="w-full border-b border-[#1A1A1A] bg-transparent pb-1 pt-1 text-[13.5px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Title<span className="text-[11px] align-top">*</span>
          </label>
          <input
            type="text"
            value={formData.title || ""}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Select your title"
            required
            className="w-full border-b border-[#1A1A1A] bg-transparent pb-1 pt-1 text-[13.5px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Number/ WhatsApp
          </label>
          <input
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Your Mobile Number"
            className="w-full border-b border-[#1A1A1A] bg-transparent pb-1 pt-1 text-[13.5px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[15px] sm:text-[16px] font-[600] leading-normal tracking-[0.04em] text-[#1A1A1A]">
            Email ID<span className="text-[11px] align-top">*</span>
          </label>
          <input
            type="email"
            value={formData.email || ""}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Your Email ID"
            required
            className="w-full border-b border-[#1A1A1A] bg-transparent pb-1 pt-1 text-[13.5px] sm:text-[14px] tracking-[0.03em] text-[#1A1A1A] placeholder:text-[#757575] focus:outline-none"
          />
        </div>

      </div>

      <label className="mt-9 flex items-center gap-2.5 cursor-pointer select-none group">
        <input
          type="checkbox"
          checked={formData.consent || false}
          onChange={(e) => updateField("consent", e.target.checked)}
          required
          className="h-[18px] w-[18px] shrink-0 rounded-[4px] border-[1.5px] border-[#1A1A1A] accent-[#2C3078] cursor-pointer"
        />
        <span className="text-[13.5px] sm:text-[14px] font-[400] leading-normal tracking-[0.03em] text-[#1A1A1A] group-hover:text-[#000000]">
          I agree to be contacted by TravelOStyle regarding my inquiry.
        </span>
      </label>
    </div>
  );
}