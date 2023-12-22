import React from "react";

function Card({ step, content }) {
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {step + 1}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}

export default function IntialCard() {
  const stepToExplore = [
    "Define your needs and priorities: What are you looking for in a product? What features are essential, and what are nice-to-haves?",
    "Research and gather options: Look for products that fit your needs and budget.",
    "Group the options: Categorize them based on relevant criteria.",
    "Develop a ranking system: Determine your criteria for ranking within each group (e.g., price, features, brand reputation).",
    "Rank and compare: Compare the options within each group based on your ranking system.",
    "Choose the best fit: Select the product that best aligns with your priorities within your chosen group.",
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {stepToExplore.map((item, index) => (
        <Card key={index} step={index} content={item} />
      ))}
    </div>
  );
}
