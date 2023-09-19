"use client";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import Image from "next/image";
import githubImg from "./../../public/images/25231.png";
import linkedinImg from "./../../public/images/free-linkedin-icon-112-thumb.png";

export default function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [dropdownItems, setDropdownItems] = useState([
    {
      label: "GitHub",
      link: "https://github.com/Uteeaami",
      iconVisible: false,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/eetu-p-6124a31a0/",
      iconVisible: false,
    },
  ]);

  const dropdownRef = useRef(null);
  const closeDropdownTimeout = useRef<any | undefined>(undefined);

  const handleSocialsMouseEnter = () => {
    setDropdownOpen(true);
    clearTimeout(closeDropdownTimeout.current);
  };

  const handleSocialsMouseLeave = () => {
    closeDropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(closeDropdownTimeout.current);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeDropdownTimeout.current);
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    const updatedItems = [...dropdownItems];
    updatedItems[index].iconVisible = true;
    setDropdownItems(updatedItems);
  };

  const handleMouseLeave = (index: number) => {
    const updatedItems = [...dropdownItems];
    updatedItems[index].iconVisible = false;
    setDropdownItems(updatedItems);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <p
          className={isDropdownOpen ? styles.socialsHovered : ""}
          onMouseEnter={handleSocialsMouseEnter}
          onMouseLeave={handleSocialsMouseLeave}
        >
          Links
        </p>
      </div>
      <div
        className={`${styles.dropdownVisible} ${
          isDropdownOpen ? styles.showDropdown : ""
        }`}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
        ref={dropdownRef}
      >
        {dropdownItems.map((item, index) => (
          <div
            className={styles.dropdownItem}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <a href={item.link} target="_blank">
              <div className={styles.leftContent}>
                <div className={styles.dropdownImage}>
                  <Image
                    src={item.label === "GitHub" ? githubImg : linkedinImg}
                    alt={item.label}
                    width={22}
                    height={22}
                  />
                </div>
                <span>{item.label}</span>
              </div>
              <div
                className={`${styles.rightContent} ${
                  item.iconVisible ? styles.visibleIcon : styles.hiddenIcon
                }`}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
