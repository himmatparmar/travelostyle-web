export default function StepFour({ formData, updateField }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Finally, tell us how to connect with you
      </h3>

      <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            First Name*
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="Your First Name"
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Last Name*
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Your Last Name"
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Title*
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="Select your Title"
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Number/ WhatsApp
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Your Mobile Number"
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Email ID*
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Your Email ID"
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-2">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => updateField("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
        />
        <span className="text-[13px] text-[#1A1A1A]">
          I agree to be contacted by TravelOStyle regarding my inquiry.
        </span>
      </label>
    </div>
  );
}
