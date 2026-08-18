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

export function NumberStepper({ label, value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[13px] text-[#1A1A1A]">{label}</span>
      <div className="flex items-center overflow-hidden rounded-md bg-[#2D3482] text-white">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          aria-label={`Decrease ${label}`}
          className="flex h-7 w-7 items-center justify-center text-sm font-semibold transition hover:bg-[#252b78]"
        >
          &minus;
        </button>
        <span className="flex h-7 w-9 items-center justify-center border-x border-white/20 text-sm font-semibold">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          aria-label={`Increase ${label}`}
          className="flex h-7 w-7 items-center justify-center text-sm font-semibold transition hover:bg-[#252b78]"
        >
          +
        </button>
      </div>
    </div>
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
