import React, { useEffect, useRef } from "react";
import "../../styles/SlidesContainer.css";

export default function SlidesContainer({ children }) {
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout;
    let lastScrollTop = 0;
    let scrollVelocity = 0;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollTop = container.scrollTop;
      const timeDelta = currentTime - lastScrollTime;
      
      if (timeDelta > 0) {
        scrollVelocity = (currentScrollTop - lastScrollTop) / timeDelta;
      }
      
      lastScrollTop = currentScrollTop;
      lastScrollTime = currentTime;
      isScrollingRef.current = true;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
        snapToNearestSlide();
      }, 200);
    };

    const snapToNearestSlide = () => {
      if (!container) return;
      
      // Include title buffer, slides, and thank you buffer
      const titleBuffer = container.querySelector(".title-buffer");
      const slides = container.querySelectorAll(".slide-container");
      const thankYouBuffer = container.querySelector(".thank-you-buffer");
      const allSections = [];
      
      if (titleBuffer) {
        allSections.push({ element: titleBuffer, index: 0, isTitleBuffer: true });
      }
      
      slides.forEach((slide, index) => {
        allSections.push({ 
          element: slide, 
          index: titleBuffer ? index + 1 : index, 
          isTitleBuffer: false 
        });
      });

      if (thankYouBuffer) {
        allSections.push({ 
          element: thankYouBuffer, 
          index: allSections.length, 
          isTitleBuffer: false 
        });
      }

      if (allSections.length === 0) return;

      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const viewportCenter = scrollTop + containerHeight / 2;
      
      let nearestSection = null;
      let minDistance = Infinity;
      let targetIndex = 0;

      allSections.forEach((section) => {
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          nearestSection = section;
          targetIndex = section.index;
        }
      });

      // Determine scroll direction based on velocity
      const scrollDirection = scrollVelocity > 0 ? 1 : -1;
      
      // If scrolling with momentum, prefer next/previous section
      if (Math.abs(scrollVelocity) > 0.5 && nearestSection) {
        const currentIndex = targetIndex;
        let nextIndex = currentIndex;
        
        if (scrollDirection > 0 && currentIndex < allSections.length - 1) {
          nextIndex = currentIndex + 1;
        } else if (scrollDirection < 0 && currentIndex > 0) {
          nextIndex = currentIndex - 1;
        }
        
        if (nextIndex !== currentIndex) {
          nearestSection = allSections[nextIndex];
        }
      }

      if (nearestSection && minDistance > 50) {
        const sectionHeight = nearestSection.element.offsetHeight;
        const targetScroll = nearestSection.element.offsetTop - (containerHeight - sectionHeight) / 2;
        
        // Only snap if we're not already close to the target
        const currentDistance = Math.abs(container.scrollTop - targetScroll);
        if (currentDistance > 100) {
          container.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: "smooth",
          });
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    
    // Handle momentum scrolling on touch devices
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaY = touchStartY - touchEndY;
      const deltaTime = touchEndTime - touchStartTime;

      if (deltaTime > 0 && Math.abs(deltaY) > 10) {
        const velocity = deltaY / deltaTime;
        
        // If there's significant velocity, snap to next/previous slide
        if (Math.abs(velocity) > 0.3) {
          setTimeout(() => {
            snapToNearestSlide();
          }, 100);
        }
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="slides-container">
      {children}
    </div>
  );
}

