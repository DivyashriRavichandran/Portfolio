import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section className={styles.container} id="Skills">
      {/* Title motion */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className={styles.skills}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill, id) => (
          <div
            key={id}
            className={`${styles.skill}`}
            style={{ "--skill-index": id }}
          >
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
