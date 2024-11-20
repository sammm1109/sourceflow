import { useState, useEffect } from "react";
import styles from "../styles/header.module.scss";

export default function Header() {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuList = () => {
    return [
      {
        id: "1",
        title: "For jobseekers",
        dropdownItems: [
          { id: "1", title: "Job searching" },
          { id: "2", title: "Job reviews" },
        ],
      },
      {
        id: "2",
        title: "For clients",
        dropdownItems: [
          { id: "1", title: "Job posting" },
          { id: "2", title: "Job reviews" },
        ],
      },
      {
        id: "3",
        title: "Sectors",
        dropdownItems: [],
      },
      {
        id: "4",
        title: "Resources",
        dropdownItems: [],
      },
    ];
  };

  const handleMouseEnter = (id) => {
    setOpenDropdownId(id);
  };

  const handleMouseLeave = () => {
    setOpenDropdownId(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerContent}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h1 className={styles.companyName}>Software Recruitment Co.</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {menuList().map((item) => (
                <li
                  key={item.id}
                  className={`${styles.dropdown} ${
                    openDropdownId === item.id ? styles.open : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}>
                  <a href="/" className={styles.navItem}>
                    {item.title}
                    <span className={styles.arrow}></span>
                  </a>

                  {item.dropdownItems.length > 0 && (
                    <ul
                      className={`${styles.dropdownMenu} ${
                        openDropdownId === item.id ? styles.show : ""
                      }`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.id}>
                          <a href="/" className={styles.dropdownItem}>
                            {dropdownItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.rightButton}>
            <button className={styles.uploadBtn}>Upload CV</button>
            <button className={styles.contactUsBtn}>Contact Us</button>
          </div>
        </div>

        {/* Mobile Section */}
        <div className={styles.mobileSection}>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
            onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>

          <div className={styles.logo}>
            <h1 className={styles.companyName}>Software Recruitment Co.</h1>
          </div>
        </div>

        {/* Mobile Menu and Overlay */}
        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
          <div className={styles.mobileMenuOverlay} onClick={toggleMenu}></div>
          <button className={styles.closeButton} onClick={toggleMenu}>
            ×
          </button>
          <ul className={styles.navList}>
            {menuList().map((item) => (
              <div key={item.id}>
                <li
                  className={`${styles.navItem} ${
                    openDropdownId === item.id ? styles.open : ""
                  }`}
                  onClick={() => toggleDropdown(item.id)}>
                  <a>{item.title}</a>
                </li>

                {openDropdownId === item.id &&
                  item.dropdownItems.map((dropdownItem) => (
                    <li key={dropdownItem.id} className={styles.dropdownItem}>
                      <a href="/" className={styles.dropdownLink}>
                        {dropdownItem.title}
                      </a>
                    </li>
                  ))}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
