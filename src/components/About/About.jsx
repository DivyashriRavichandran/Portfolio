import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className={styles.container}
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <h2 className={styles.title}>About Me</h2>
          <img
            src={getImageUrl("about/avatar.png")}
            alt="avatar"
            className={styles.avatar}
          />
        </div>

        <div className={styles.aboutText}>
          <p>
            Hello{" "}
            <img
              src={getImageUrl("about/hello.png")}
              alt="Hello Icon"
              className={styles.icon}
            />
            , I'm Divyashri Ravichandran from Doha, Qatar. I graduated with a 
            <span className={styles.name}> BSc (Hons) in Computer Science </span>
            from the <span className={styles.name}> University of Leeds, UK. </span> </p>

          <p> As a front-end developer, specializing in <span className={styles.name}> React.js, </span> 
          with a solid foundation in <span className={styles.name}> HTML, CSS, and JavaScript, </span>
          I am eager to apply my skills and grow in new opportunities.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

/* Hello, I'm Divyashri Ravichandran from Doha, Qatar. 
I graduated from the University of Leeds in England with a BSc (Hons) in Computer Science.
I am a front-end developer specializing in front-end development and UI/UX design. 
Proficient in React.js and Figma.*/