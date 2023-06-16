import React, { useState } from "react";

// icons:
import { ReactComponent as ArrowL } from "../assets/images/arrow-left.svg";
import { ReactComponent as ArrowR } from "../assets/images/arrow-right.svg";
import { ReactComponent as Star } from "../assets/images/golder-star-big.svg";

const testimonials = [
  {
    id: 1,
    author: "Christopher Nolan",
    avatar:
      "https://fastly.picsum.photos/id/65/491/326.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    role: "Our client",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
  {
    id: 2,
    author: "Christopher Nolan 2",
    avatar:
      "https://fastly.picsum.photos/id/65/491/326.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    role: "Our Developer",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
  {
    id: 3,
    author: "Christopher Nolan 3",
    avatar:
      "https://fastly.picsum.photos/id/65/491/326.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0",
    role: "Our CEO",
    desc: "Our caring and supportive team has experience working with patients face-to-face and dealing with mental health issues. Spend less time searching for help and more time connecting with someone you can trust.",
  },
];

function Testimonial() {
  const [index, setIndex] = useState(1);
  const length = 3;
  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex > length ? 1 : newIndex);
  };
  const handlePrevious = () => {
    console.log(index);
    const newIndex = index - 1;
    setIndex(newIndex <= 0 ? length : newIndex);
  };

  return (
    <section className="testimonials container section">
      <div className="testimonials-container">
        <div className="testimonial-header">
          <p className="text-normal">Testimonial</p>
          <h1 className="text-header">You're in safe hands</h1>
          <span className="stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </div>
        <div className="testimonial-content">
          <ArrowL onClick={handlePrevious} className="previous-btn" />
          {testimonials
            .filter((testimonial) => testimonial.id === index)
            .map((t) => (
              <div key={t.id}>
                <p className="testi-desc">{t.desc}</p>
                <div
                  className="testi-avatar"
                  style={{
                    backgroundImage: `${t.avatar}`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <p className="testi-author">{t.author}</p>
                <span className="testi-role">{t.role}</span>
              </div>
            ))}
          <ArrowR onClick={handleNext} className="next-btn" />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
