import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  // Listen for theme changes
  useEffect(() => {
    const themeObserver = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme || "dark");
    });

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      themeObserver.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs.sendForm('service_cd0c2ce', 'template_k856tjf', e.target, 'co1DZTK5qj_ecQZcz')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset form after 3 seconds
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });

    e.target.reset(); // Clear the form after submission
  };

  const getIconUrl = (theme) => {
    return theme === "dark"
      ? getImageUrl("contact/send-light.png")
      : getImageUrl("contact/send-dark.png");
  };

  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Motion for text container */}
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </motion.div>

      {/* Motion for form */}
      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button
          type="submit"
          className={`${styles.submitButton} ${submitted ? styles.submitted : ''}`}
        >
          <img
            src={getIconUrl(theme)}
            alt="send icon"
            className={styles.icon}
          />
        </button>
      </motion.form>
    </motion.section>
  );
};
