import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import FAQData from "./FAQData";
import "./FAQSection.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null); // Keeps track of open FAQ item

  // Toggles the currently open FAQ item
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-bg">
      {/* FAQ header with title and description */}
      <div className="faq-header container">
        <h2>Frequently Asked Questions</h2>
        <p>
          Dictumst vel enim massa neque lacus eu lorem suscipit. Habitant
          aliquet elit ultricies in facilisi.
        </p>
      </div>

      {/* Main FAQ container with two columns: left (accordion) & right (contact box) */}
      <section className="faq-section container">
        {/* Accordion section */}
        <div className="faq-left">
          <div className="faq-items">
            {FAQData.map((item, index) => (
              <div key={item.id} className="faq-item">
                {/* Question row */}
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  <span className="faq-icon">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                {/* Answer content - only shown if active */}
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.paragraph}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact box with background and CTA */}
        <div
          className="faq-right"
          style={{
            backgroundImage:
              "url('/image/661e0da93587e5adbe8d8031_bg (1).png')",
          }}
        >
          <img
            src="/svg/661e0d75b08a6673bc59fb4a_messaging 1.svg"
            alt="Messaging Icon"
            className="faq-right-icon"
          />
          <h3>You have different Questions?</h3>
          <p>
            Amet donec risus elementum sollicitudin. Odio dui cum arcu
            vestibulum nunc massa.
          </p>
          <button className="faq-contact-btn">
            Contact us <MdOutlineArrowRightAlt className="arrow" />
          </button>
        </div>
      </section>
    </div>
  );
}
