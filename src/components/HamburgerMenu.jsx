import React, { useState, useEffect } from "react";
import "../styles/HamburgerMenu.css";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const slides = [
    { id: "slide-1", title: "State of the Art", number: 1 },
    { id: "slide-2", title: "Ontology Diagram", number: 2 },
    { id: "slide-3", title: "Project Question", number: 3 },
    { id: "slide-4", title: "Research Methods", number: 4 },
    { id: "slide-5", title: "Key Precedents", number: 5 },
    { id: "slide-6", title: "Technology Ecosystem", number: 6 },
    { id: "slide-7", title: "Study of Setting & Constituencies", number: 7 },
    { id: "slide-8", title: "System + UML Diagram", number: 8 },
    { id: "slide-9", title: "Computational Challenges + Barriers to Entry", number: 9 },
    { id: "slide-10", title: "Communities of Practice + Literature Review", number: 10 },
    { id: "slide-11", title: "Project Aesthetics", number: 11 },
    { id: "slide-12", title: "Radical Prototype", number: 12 },
    { id: "slide-13", title: "Storyboard + Forking Path", number: 13 },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSlide = (slideId) => {
    const slidesContainer = document.querySelector(".slides-container");
    const targetSlide = document.getElementById(slideId);
    
    if (slidesContainer && targetSlide) {
      const containerHeight = slidesContainer.clientHeight;
      const slideHeight = targetSlide.offsetHeight;
      const targetScroll = targetSlide.offsetTop - (containerHeight - slideHeight) / 2;
      
      slidesContainer.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      
      setIsOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const menu = document.querySelector(".hamburger-menu-overlay");
      const toggle = document.querySelector(".hamburger-toggle");
      
      if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="hamburger-toggle"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="hamburger-menu-overlay">
          <div className="hamburger-menu-content">
            <h2 className="hamburger-menu-title">Navigation</h2>
            <nav className="hamburger-menu-nav">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  className="hamburger-menu-item"
                  onClick={() => navigateToSlide(slide.id)}
                >
                  <span className="hamburger-menu-number">
                    {String(slide.number).padStart(2, '0')}
                  </span>
                  <span className="hamburger-menu-label">{slide.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

