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

export const DURATION_OPTIONS = ["2-5 Days", "6-10 Days", "11-20 Days", "20+ Days"];

export const TAILOR_TOPICS = [
  "I want to discuss my ideal accommodation type",
  "I want to discuss the pace of my journey",
  "I'm traveling with my own group and would like a private rate",
  "I want you to recommend sights, activities, or experiences",
  "I have dietary, accessibility, rooming, or other travel needs which I would like to discuss",
  "My budget is flexible for the right experience",
  "I want to explore different travel dates",
  "I am traveling with an infant and require some guidance",
  "I want you to recommend more destinations and/or stopovers",
];

export const TOTAL_STEPS = 6;

export const initialFormData = {
  destination: "",
  experiences: [],
  guests: { adults: 0, children: 0 },
  duration: [],
  tailorTopics: [],
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
