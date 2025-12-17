import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/Pagination.css";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (!totalPages || totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="slide-pagination">
      <button
        className="pagination-arrow pagination-arrow-left"
        onClick={handlePrev}
        disabled={currentPage === 0}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
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
      <button
        className="pagination-arrow pagination-arrow-right"
        onClick={handleNext}
        disabled={currentPage === totalPages - 1}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

