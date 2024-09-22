import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils"; 

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
  };

  // Scroll to specific section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-inner"]}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
          <button onClick={toggleDarkMode} className={styles.toggleButton}>
            <img
              src={getImageUrl(darkMode ? "navbar/moon.png" : "navbar/sun.png")}
              alt={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={styles.toggleIcon}
            />
          </button>

          <div className={styles.menuItems}>
            <a onClick={() => scrollToSection("about")}>About</a>
            <a onClick={() => scrollToSection("Skills")}>Skills</a>
            <a onClick={() => scrollToSection("projects")}>Projects</a>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
