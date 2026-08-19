// Steps are intentionally kept in a single array so more steps can be
// dropped in later without touching index.jsx — just add a step object
// here and a matching case in index.jsx.
export const TOTAL_STEPS = 4;

export const initialFormData = {
  firstName: "",
  lastName: "",
  title: "",
  countryCode: "+1",
  phone: "",
  email: "",
  guests: "",
  travelingWithChildren: "No",
  flightAssistance: "Yes",
  // Only collected when the form is opened without a specific departure
  // (see PrivateInquiryForm's `showDepartureDate` prop) — replaces the
  // departure-date card with a "when do you want to travel" question.
  travelYear: "",
  travelMonth: "",
  customizations: [],
  stopovers: [],
  discussCustomStopovers: false,
  tripReason: "",
  travelInfoNote: "",
  consent: false,
};

export const CUSTOMIZATION_OPTIONS = [
  "I would like to explore different accommodation categories or stay styles",
  "I would like to adjust how relaxed or packed the journey feels",
  "I would like to increase or decrease the no.of days for which I'm traveling",
  "I'm traveling with my own group and would like a private rate",
  "I would like to explore sights, activities, or experience different from those mentioned in the itinerary",
  "I have dietary, accessibility, rooming, or other travel needs which I would like to discuss",
  "My budget is flexible for the right experience",
  "I would like to explore different travel dates",
  "I am traveling with an infant and require some guidance",
  "I would like to customize another part of the trip which is not listed above",
];

export const STOPOVER_OPTIONS = [
  {
    id: "dubai-2n",
    title: "Dubai, U.A.E",
    duration: "3 Days,2 Nights",
    price: 750,
    image: "/Dubai.svg",
  },
  {
    id: "muscat-2n",
    title: "Muscat, Oman",
    duration: "3 Days,2 Nights",
    price: 750,
    image: "/placeholder-image.svg",
  },
  {
    id: "mumbai-2n",
    title: "Mumbai, India",
    duration: "3 Days,2 Nights",
    price: 1000,
    image: "/placeholder-image.svg",
  },
  {
    id: "dubai-4n",
    title: "Dubai, U.A.E",
    duration: "5 Days,4 Nights",
    price: 1500,
    image: "/Dubai.svg",
  },
  {
    id: "muscat-2n-b",
    title: "Muscat, Oman",
    duration: "3 Days,2 Nights",
    price: 750,
    image: "/placeholder-image.svg",
  },
  {
    id: "mumbai-2n-b",
    title: "Mumbai, India",
    duration: "3 Days,2 Nights",
    price: 1000,
    image: "/placeholder-image.svg",
  },
];

// Shown in StepOne's "When do you want to travel?" row, used only when
// the form has no specific departure to display instead.
export const TRAVEL_YEARS = ["2026", "2027", "2028"];

export const TRAVEL_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
