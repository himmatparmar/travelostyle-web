export function CheckboxPill({ label, checked, onChange }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-[13px] text-[#1A1A1A]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 cursor-pointer rounded-[3px] border-gray-400 accent-[#2D3482]"
      />
      {label}
    </label>
  );
}

export function RadioPill({ name, label, value, checked, onChange }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-[13px] text-[#1A1A1A]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 cursor-pointer accent-[#2D3482]"
      />
      {label}
    </label>
  );
}
