import React from "react";
import "../../styles/Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null;

  return (
    <div className="slide-pagination">
      <div className="indicator-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${currentPage === index ? "active" : ""}`}
            onClick={() => onPageChange(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

