import { TRAVEL_YEARS, TRAVEL_MONTHS } from "./constants";

function RadioOption({ name, value, checked, onChange, label }) {
  return (
    <label className="flex cursor-pointer items-center gap-1.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 cursor-pointer accent-[#2D3482]"
      />
      <span className="text-[12px] text-[#1A1A1A]">{label}</span>
    </label>
  );
}

export default function StepOne({ formData, updateField, showTravelWindow }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  return (
    <div>
      <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
        Guest Details
      </h3>

      <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            First Name*
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your First Name"
            required
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Last Name*
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your Last Name"
            required
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Title*
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] focus:outline-none"
          >
            <option value="" disabled>
              Select your title
            </option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Number/ WhatsApp
          </label>
          <div className="flex items-center gap-2 border-b border-gray-400 pb-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="appearance-none bg-transparent text-[13px] text-[#1A1A1A] focus:outline-none"
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              className="w-full bg-transparent text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            Email ID*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email ID"
            required
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium text-[#1A1A1A]">
            No.of Guests*
          </label>
          <input
            type="number"
            min="1"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            placeholder="Enter no.of Guests"
            required
            className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <div>
          <p className="mb-2 text-[13px] font-medium text-[#1A1A1A]">
            Are you traveling with children?* (under 12yrs)
          </p>
          <div className="flex items-center gap-6">
            <RadioOption
              name="travelingWithChildren"
              value="Yes"
              checked={formData.travelingWithChildren === "Yes"}
              onChange={handleChange}
              label="Yes"
            />
            <RadioOption
              name="travelingWithChildren"
              value="No"
              checked={formData.travelingWithChildren === "No"}
              onChange={handleChange}
              label="No"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-[13px] font-medium text-[#1A1A1A]">
            Do you require assistance with flight bookings?
          </p>
          <div className="flex items-center gap-6">
            <RadioOption
              name="flightAssistance"
              value="Yes"
              checked={formData.flightAssistance === "Yes"}
              onChange={handleChange}
              label="Yes"
            />
            <RadioOption
              name="flightAssistance"
              value="No"
              checked={formData.flightAssistance === "No"}
              onChange={handleChange}
              label="No"
            />
            <RadioOption
              name="flightAssistance"
              value="Not sure yet"
              checked={formData.flightAssistance === "Not sure yet"}
              onChange={handleChange}
              label="Not sure yet"
            />
          </div>
        </div>

        {showTravelWindow && (
          <div className="sm:col-span-2">
            <p className="mb-2 text-[13px] font-medium text-[#1A1A1A]">
              When do you want to travel?
            </p>
            <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              <select
                name="travelYear"
                value={formData.travelYear}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] focus:outline-none"
              >
                <option value="" disabled>
                  Pick Year of Travel
                </option>
                {TRAVEL_YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                name="travelMonth"
                value={formData.travelMonth}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent pb-2 text-[13px] text-[#1A1A1A] focus:outline-none"
              >
                <option value="" disabled>
                  Pick Month of Travel
                </option>
                {TRAVEL_MONTHS.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
