import React from "react";
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
  return (
    <div id={id || (slideNumber !== null ? `slide-${slideNumber}` : null)} className={`slide-container ${className}`}>
      <div className="slide-content">
        <div className="slide-inner-border"></div>
        {title && (
          <div className="slide-title">{title}</div>
        )}
        {slideNumber !== null && (
          <div className="slide-number">
            {String(slideNumber).padStart(2, '0')}
          </div>
        )}
        <div className="slide-body">{children}</div>
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

