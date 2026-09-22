// Frontend display catalog. The authoritative price lives server-side in create-checkout.
export const PRODUCTS = {
  "private-lesson": {
    id: "private-lesson",
    name: "Private Lesson Session",
    price: 60,
    priceLabel: "$60 / session",
    type: "one-time",
  },
  "full-course": {
    id: "full-course",
    name: "Full Course Semester",
    price: 1200,
    priceLabel: "$1,200 / semester",
    type: "one-time",
  },
  "self-paced": {
    id: "self-paced",
    name: "Self-Paced Program (Monthly)",
    price: 120,
    priceLabel: "$120 / month",
    type: "subscription",
  },
};