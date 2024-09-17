import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.aboutText}>
          <p>
            Hello{" "}
            <img
              src={getImageUrl("about/hello.png")}
              alt="Hello Icon"
              className={styles.icon}
            />
            , I’m Divyashri Ravichandran from{" "}
            <img
              src={getImageUrl("about/pin.png")}
              alt="Pin Icon"
              className={styles.icon}
            />
            Doha, Qatar. I hold a BSc (Hons) degree in Computer Science from the University of Leeds, UK.
          </p>
          <p>
            I am a passionate front-end developer with a strong foundation in
            web development and hands-on experience using modern frameworks like
            React.js.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
