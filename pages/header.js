import { useState } from "react";
import styles from "../styles/header.module.scss";

export default function Header() {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const menuList = () => {
    return [
      {
        id: "1",
        title: "For jobseekers",
        dropdownItems: [
          {
            id: "1",
            title: "Job searching",
          },
          {
            id: "2",
            title: "Job reviews",
          },
        ],
      },
      {
        id: "2",
        title: "For clients",
        dropdownItems: [
          {
            id: "1",
            title: "Job posting",
          },
          {
            id: "2",
            title: "Job reviews",
          },
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

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerContent}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h1 className={styles.companyName}>Software Recruitment Co.</h1>
          </div>

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

                  {item.dropdownItems && item.dropdownItems.length > 0 && (
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
      </div>
    </header>
  );
}
