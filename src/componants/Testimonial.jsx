import React, { useState } from "react";

// icons:
import { ReactComponent as ArrowL } from "../assets/images/arrow-left.svg";
import { ReactComponent as ArrowR } from "../assets/images/arrow-right.svg";
import { ReactComponent as Star } from "../assets/images/star.svg";

const testimonials = [
  {
    id: 1,
    author: "Christopher Nolan",
    role: "Our client",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
  {
    id: 2,
    author: "Christopher Nolan2",
    role: "Our client",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
  {
    id: 3,
    author: "Christopher Nolan3",
    role: "Our client",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(1);
  const length = 3;
  const handleNext = () => {
    console.log(index);
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  const handlePrevious = () => {
    console.log(index);

    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  return (
    <section className="testimonials container section">
      <div className="testimonial-header ">
        <p className="text-normal">Testimonial</p>
        <h1 className="text-haeder">You're in safe hands</h1>
        <span className="stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
      </div>
      <div className="testimonial-content">
        <ArrowL onClick={handlePrevious} />
        {testimonials
          .filter((testimonial) => testimonial.id === index)
          .map((t) => (
            <div key={t.id}>
              <p className="testi-desc">{t.desc}</p>
              <p className="testi-author">{t.author}</p>
              <span className="testi-role">{t.role}</span>
            </div>
          ))}
        <ArrowR onClick={handleNext} />
      </div>
    </section>
  );
}

export default Testimonial;
