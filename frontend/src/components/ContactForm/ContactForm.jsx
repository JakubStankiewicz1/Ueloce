import React, { useState } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contactForm">
      <div className="contactFormContainer">

        {/* Left Part - Contact Info */}
        <div className="contactFormContainerLeft">
          <div className="contactFormContainerLeftContainer">
            <div className="contactFormContainerLeftContainerTitle">
              <h2 className="contactFormContainerLeftContainerTitleText jaro-regular">Get in Touch</h2>
            </div>

            <div className="contactFormContainerLeftContainerInfo">
              <div className="contactFormContainerLeftContainerInfoItem">
                <p className="contactFormContainerLeftContainerInfoItemLabel geist-regular">Phone</p>
                <p className="contactFormContainerLeftContainerInfoItemValue jaro-regular">(123) 456-7890</p>
              </div>

              <div className="contactFormContainerLeftContainerInfoItem">
                <p className="contactFormContainerLeftContainerInfoItemLabel geist-regular">Email</p>
                <p className="contactFormContainerLeftContainerInfoItemValue jaro-regular">contact@ueloce.com</p>
              </div>

              <div className="contactFormContainerLeftContainerInfoItem">
                <p className="contactFormContainerLeftContainerInfoItemLabel geist-regular">Address</p>
                <p className="contactFormContainerLeftContainerInfoItemValue jaro-regular">123 Aperitif Street, Fine Drinks District</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part - Form */}
        <div className="contactFormContainerRight">
          <div className="contactFormContainerRightContainer">
            <form className="contactFormContainerRightContainerForm" onSubmit={handleSubmit}>
              <div className="contactFormContainerRightContainerFormGroup">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contactFormContainerRightContainerFormInput geist-regular"
                  required
                />
              </div>

              <div className="contactFormContainerRightContainerFormGroup">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contactFormContainerRightContainerFormInput geist-regular"
                  required
                />
              </div>

              <div className="contactFormContainerRightContainerFormGroup">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contactFormContainerRightContainerFormInput geist-regular"
                  required
                />
              </div>

              <div className="contactFormContainerRightContainerFormGroup">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contactFormContainerRightContainerFormTextarea geist-regular"
                  rows="6"
                  required
                />
              </div>

              <div className="contactFormContainerRightContainerFormGroup">
                <button type="submit" className="contactFormContainerRightContainerFormButton">
                  <span className="contactFormContainerRightContainerFormButtonText jaro-regular">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
