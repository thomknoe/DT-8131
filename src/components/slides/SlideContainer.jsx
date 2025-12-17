import React, { useRef } from "react";
import "../../styles/SlideContainer.css";
import Pagination from "./Pagination";

export default function SlideContainer({ 
  children, 
  className = "", 
  title = "", 
  slideNumber = null,
  pagination = null,
  id = null
}) {
  const slideRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <div 
      ref={slideRef}
      id={id || (slideNumber !== null ? `slide-${slideNumber}` : null)} 
      className={`slide-container ${className}`}
    >
      <div ref={containerRef} className="slide-content">
        <div className="slide-inner-border"></div>
        {title && (
          <div className="slide-title">{title}</div>
        )}
        {slideNumber !== null && (
          <div className="slide-number">
            {String(slideNumber).padStart(2, '0')}
          </div>
        )}
        <div className="slide-body">
          {children}
        </div>
        {pagination && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={pagination.onPageChange}
          />
        )}
      </div>
    </div>
  );
}

