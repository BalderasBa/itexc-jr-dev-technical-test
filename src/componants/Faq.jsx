import React, { useState, useRef } from "react";
// images:
import stethoscope from "../assets/images/faq-doc-with-stethoscope.jpg";
import { ReactComponent as Chat } from "../assets/images/chat-icon.svg";
import { ReactComponent as Plus } from "../assets/images/plus-icon.svg";

const faqs = [
  {
    id: 1,
    header: "Question text goes here",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
  },
  {
    id: 2,
    header: "Question text goes here",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
  },
  {
    id: 3,
    header: "Question text goes here",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."`,
  },
];
const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="accordion-title">
            <span>0{id}:</span>
            {header}
          </h5>
          <Plus />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

function Faq() {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  // return (
  //   <>
  //     <div className="container-fluid mt-5 mb-5">
  //       <div className="row justify-content-center">
  //         <div className="col-md-8 mt-2">
  //           <div className="card">
  //             <div className="card-body">
  //               <h4 className="form-heading mb-4 mt-3">React Accordion</h4>
  //               {faqs.map((faq, index) => {
  //                 return (
  //                   <AccordionItem
  //                     key={index}
  //                     active={active}
  //                     handleToggle={handleToggle}
  //                     faq={faq}
  //                   />
  //                 );
  //               })}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <section className="faq container section">
      <div className="faq-accordion">
        <h1>
          <Chat />
          faq
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        </p>
        <div className="accordion">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-2">
              <div className="card">
                <div className="card-body">
                  {faqs.map((faq, index) => {
                    return (
                      <AccordionItem
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-contact">
        <img src={stethoscope} alt="doctor hand & stethoscope" />
        <div>
          <p>Still have a question?</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <a href="#" className="button_s">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;
