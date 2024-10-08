import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  const [theme, setTheme] = useState("dark"); // Default theme is 'dark'

  useEffect(() => {
    // Check the initial theme
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(currentTheme);

    // Create a MutationObserver to detect changes in the 'data-theme' attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          const newTheme = document.documentElement.getAttribute("data-theme");
          setTheme(newTheme);
        }
      });
    });

    // Observe changes in the 'data-theme' attribute on the document element
    observer.observe(document.documentElement, {
      attributes: true, // Observe attribute changes
    });

    // Cleanup observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const getIconUrl = (iconName) => {
    // Return different icons based on the theme
    return theme === "dark"
      ? getImageUrl(`footer/dark/${iconName}.png`)
      : getImageUrl(`footer/light/${iconName}.png`);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.text}>Copyright © 2024 Divyashri. All Rights Reserved.</p>
      </div>
      <div className={styles.right}>
        <a
          href="https://github.com/divyashriravichandran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={getIconUrl("github")} // Conditionally load GitHub icon
            alt="GitHub"
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/divyashri-ravichandran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={getIconUrl("linkedin")} // Conditionally load LinkedIn icon
            alt="LinkedIn"
            className={styles.icon}
          />
        </a>
        <a href="mailto:divyashri.ravichandran4@gmail.com">
          <img
            src={getIconUrl("email")} // Conditionally load Email icon
            alt="Gmail"
            className={styles.icon}
          />
        </a>
      </div>
    </footer>
  );
};
