"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

// Native <select> dropdown popups are OS-rendered on mobile (iOS/Android
// pickers) and completely ignore <option> CSS — the only fix that actually
// works cross-platform is to stop using the native popup and build the
// options list ourselves. This is a lightweight, dependency-free stand-in
// for <select> that stays visually consistent everywhere.
export default function CustomSelect({
  name,
  value,
  onChange,
  options, // [{ value, label }]
  placeholder = "Select",
  triggerClassName = "",
  menuClassName = "",
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isOpen]);

  const selected = options.find((opt) => String(opt.value) === String(value));

  const selectOption = (optionValue) => {
    onChange?.({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between bg-transparent text-left focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 ${triggerClassName}`}
      >
        <span className={selected ? "" : "text-[#B0B0B0]"}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`ml-2 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className={`absolute left-0 right-0 top-full z-30 mt-1 max-h-[220px] overflow-y-auto rounded-md border border-[#3A3A3A] bg-white shadow-lg ${menuClassName}`}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={String(opt.value) === String(value)}
              onClick={() => selectOption(opt.value)}
              className={`block w-full px-3 py-2 text-left text-[12px] text-[#1A1A1A] hover:bg-gray-100 ${
                String(opt.value) === String(value) ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
