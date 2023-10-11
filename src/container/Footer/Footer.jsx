import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    feedback: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shouldDisable, setShouldDisable] = useState(true);

  const { username, company, feedback } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setShouldDisable(false);
  };

  const handleSubmit = () => {
    setLoading(true);

    const testimonials = {
      _type: "testimonials",
      name: formData.username,
      company: formData.company,
      feedback: formData.feedback,
    };

    client
      .create(testimonials)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.message} alt="feedback" />
          <a href="mailto:fsd.rabgay@gmail.com" className="p-text">
            fsd.rabgay@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.call} alt="phone" />
          <a href="tel:+975 77 20 49 70" className="p-text">
            +975 77 20 49 70
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Work Place"
              name="company"
              value={company}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your feedback"
              value={feedback}
              name="feedback"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit} disabled={shouldDisable}>
            {!loading ? "Send feedback" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
