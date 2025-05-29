import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Is vaping safer than smoking cigarettes?",
      answer:
        "Many experts believe that vaping is less harmful than smoking traditional cigarettes, as it typically contains fewer toxic substances. However, it's not completely risk-free, especially for non-smokers, teens, and pregnant individuals.",
    },
    {
      question: "What is in e-liquid?",
      answer:
        "E-liquids generally contain four main ingredients: propylene glycol (PG), vegetable glycerin (VG), flavorings, and nicotine (optional). Always check product labels for a complete list of ingredients.",
    },
    {
      question: "Can I vape without nicotine?",
      answer:
        "Yes, there are nicotine-free e-liquids available. These are great for users who enjoy vaping but want to avoid nicotine altogether.",
    },
    {
      question: "How do I store my e-liquids?",
      answer:
        "Store e-liquids in a cool, dry place away from direct sunlight and out of reach of children and pets. This helps preserve the flavor and nicotine quality over time.",
    },
    {
      question: "Do your products comply with safety regulations?",
      answer:
        "Yes, all our vaping products and e-liquids are manufactured in compliance with industry safety standards and TPD regulations where applicable.",
    },
    {
      question: "What is the shelf life of e-liquids?",
      answer:
        "Most e-liquids have a shelf life of about 1 to 2 years. Be sure to check the expiration date on the bottle and store them properly for maximum freshness.",
    },
  ];

  return (
    <div className="relative w-full bg-yellow-50 px-6 pt-12 pb-8 mt-8 mb-0 min-h-screen shadow-xl ring-1 ring-gray-900/5">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-yellow-600 md:text-xl">
            Frequently Asked Questions About Vaping
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
