import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  
  // Function to determine if an element is in the viewport
  const isInViewport = (element) => {
    const { top, bottom } = element.getBoundingClientRect();
    return top < window.innerHeight && bottom >= 0;
  };

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(`.${styles.projectContainer}`).forEach((element, index) => {
        if (isInViewport(element)) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        } else {
          element.style.opacity = 0;
          element.style.transform = 'translateY(100px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects" className={styles.projectsWrapper}>
      <h2 className={styles.title}>Projects</h2>
      {projectsData.map((project, index) => (
        <motion.div
          className={styles.projectContainer}
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <img src={getImageUrl(project.imageSrc)} alt={project.title} className={styles.projectImage} />
          <div className={styles.projectDetails}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className={styles.skillButtonsContainer}>
            {project.skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillIcon} />
                </div>
              </div>
            ))}
          </div>

            <div className={styles.projectLinks}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.source} target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
