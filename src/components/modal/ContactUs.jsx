import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import config from "../../config/config";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    message: "",
    isError: false,
  });

  const formRef = useRef();
  const indianPhoneRegex = /^(?:(?:\+|0{0,2})91[\s-]?)?[6789]\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateField = (name, value) => {
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "email" && value) {
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }

    if (name === "phone" && value) {
      if (!indianPhoneRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Please enter a valid Indian phone number",
        }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email" || name === "phone") {
      validateField(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (formData.email && !emailRegex.test(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      isValid = false;
    }

    if (formData.phone && !indianPhoneRegex.test(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid Indian phone number",
      }));
      isValid = false;
    }

    if (!isValid) return;

    // Set submitting state
    setSubmitStatus({
      isSubmitting: true,
      message: "",
      isError: false,
    });

    // Send email using EmailJS
    emailjs
      .sendForm(
        config.emailjsServiceId, // Replace with your EmailJS service ID
        config.emailjsTemplateId, // Replace with your EmailJS template ID
        formRef.current,
        config.emailjsPublicId // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus({
          isSubmitting: false,
          message: "Thank you for your message! We will contact you soon.",
          isError: false,
        });

        // Reset form and close modal after success
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({ email: "", phone: "" });

        // Wait a moment to show success message before closing
        setTimeout(() => {
          document.getElementById("contact_modal").close();
          setSubmitStatus((prev) => ({ ...prev, message: "" }));
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSubmitStatus({
          isSubmitting: false,
          message: "Failed to send your message. Please try again later.",
          isError: true,
        });
      });
  };

  const openModal = () => {
    document.getElementById("contact_modal").showModal();
  };

  return (
    <div className="flex justify-center p-4">
      {/* Contact Us Button */}
      <button onClick={openModal} className="btn btn-primary">
        Contact Us
      </button>

      {/* Modal Dialog */}
      <dialog id="contact_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-xl mb-4">Contact Us</h3>
          <p className="mb-6">
            Please fill out the form and we'll get back to you soon!
          </p>

          {submitStatus.message && (
            <div
              className={`alert ${
                submitStatus.isError ? "alert-error" : "alert-success"
              } mb-4`}
            >
              <div>{submitStatus.message}</div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your-email@example.com"
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                  required
                />
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.email}
                    </span>
                  </label>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 9876543210"
                  className={`input input-bordered w-full ${
                    errors.phone ? "input-error" : ""
                  }`}
                />
                {errors.phone && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.phone}
                    </span>
                  </label>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-4 gap-2 flex">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-32"
                placeholder="Please tell us how we can help you..."
                required
              ></textarea>
            </div>

            <div className="modal-action mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitStatus.isSubmitting}
              >
                {submitStatus.isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <form method="dialog">
                <button
                  className="btn"
                  type="button"
                  onClick={() =>
                    document.getElementById("contact_modal").close()
                  }
                >
                  Cancel
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ContactUs;
