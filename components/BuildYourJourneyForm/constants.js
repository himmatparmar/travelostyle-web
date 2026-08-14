export const STEPS = [
  { id: 1, label: "Tell us about how you imagine travel" },
  { id: 2, label: "We'll discuss further to personalize an itinerary" },
  { id: 3, label: "Next, we refine until we arrive at your ideal trip" },
  { id: 4, label: "Complete the booking and payment schedules and set off!" },
];

export const EXPERIENCES = [
  "Adventure",
  "Nature & Wildlife",
  "Safaris",
  "Camping",
  "Culture & History",
  "Festivals",
  "Culinary (Food & Drink)",
  "Beaches",
  "Coastal",
  "City Life",
  "Luxury Escapes",
  "Family-focused",
  "Cruises",
  "Private Jet Journeys",
  "Rail Journeys",
];

export const TRIP_REASONS = [
  "Honeymoon",
  "Birthday",
  "Babymoon",
  "Anniversary",
  "Family Trip",
  "Bucket List",
  "Graduation",
  "Friend Trip",
  "Because I love to travel",
];

export const BUDGET_RANGES = ["$2500-4000", "$4000-8000", "$6000-8000", "$8000+"];

export const initialFormData = {
  destination: "",
  experiences: [],
  tripReason: "",
  expertNote: "",
  budgetAmount: "",
  budgetRange: "",
  includesFlights: "No",
  flightAssistance: "No",
  budgetPreference: "open-to-increase",
  firstName: "",
  lastName: "",
  title: "",
  phone: "",
  email: "",
  consent: false,
};
