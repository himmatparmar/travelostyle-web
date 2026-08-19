"use client";

import { useState } from "react";
import GeneralInquiryForm from "./index";

export default function TalkToAdvisorButton({
  className,
  children = "Talk to a Travel Advisor",
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
        {...props}
      >
        {children}
      </button>

      <GeneralInquiryForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={(data) => console.log("Advisor inquiry submitted:", data)}
      />
    </>
  );
}
