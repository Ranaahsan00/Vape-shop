import React from "react";

const testimonials = [
  {
    name: "Emily Smith",
    role: "Marketing Manager at ABC Company",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    title: "Efficient customer support",
    content:
      "The customer support team at our service is incredibly responsive and helpful. They went above and beyond to assist me with my issue.",
    span: 2,
  },
  {
    name: "Michael Johnson",
    role: "CEO at XYZ Corporation",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    title: "Excellent product features",
    content:
      "The features offered by our service are outstanding. They have greatly improved our workflow and efficiency.",
    span: 3,
  },
  {
    name: "Sarah Brown",
    role: "CTO at XYZ Corporation",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    title: "Seamless integration process",
    content:
      "Integrating our systems with our service was smooth and hassle-free. The support team guided us through every step of the process.",
    span: 3,
  },
  {
    name: "James White",
    role: "COO at XYZ Corporation",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
    title: "Reliable service uptime",
    content:
      "Our service has consistently maintained high uptime, ensuring that our operations run smoothly without any disruptions.",
    span: 2,
  },
];

const Testimonials = () => {
  return (
    <div className="py-20">
      <section className="container mx-auto px-10 py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center">
            Here's what our <span className="text-yellow-800">customers</span>{" "}
            have to say
          </h2>
          <p className="text-lg font-medium text-slate-400/70">
            Discover how our service can benefit you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`border p-7 rounded-xl drop-shadow-md border-neutral-800/50 col-span-${testimonial.span} flex flex-col gap-y-10 justify-between`}
            >
              <div className="flex flex-col gap-y-3.5">
                <p className="font-bold text-xl">{testimonial.title}</p>
                <p className="font-medium ">{testimonial.content}</p>
              </div>
              <div className="flex flex-col">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full"
                />
                <p className="pt-2 text-sm font-semibold text-yellow-800">
                  {testimonial.name}
                </p>
                <p className="text-sm font-medium ">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
