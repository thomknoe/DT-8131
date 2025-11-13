import React from "react";

export default function Section({ title, children }) {
  return (
    <section
      className="
        h-screen flex items-center justify-center relative 
        snap-start snap-always
        px-4 sm:px-8
      "
    >
      <div
        className="
          w-[85vw] sm:w-[80vw] md:w-[70vw] lg:w-[65vw]
          max-w-[1200px]
          h-[68vh] sm:h-[70vh] md:h-[72vh]
          flex flex-col justify-start
          backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl
          text-white p-6 sm:p-8 md:p-10
          transition-all duration-500 ease-in-out
        "
        style={{
          marginTop: "6vh",
          marginBottom: "6vh",
        }}
      >
        {/* Title area */}
        {title && (
          <div className="relative w-full mb-4 sm:mb-6">
            <h4 className="text-center sm:text-xl md:text-2xl font-semibold text-white/90 tracking-wide">
              {title}
            </h4>
            {/* full-width divider line */}
            <div
              className="
                absolute left-0 -mx-[calc(1.5rem)] sm:-mx-[2rem] md:-mx-[2.5rem]
                w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] md:w-[calc(100%+5rem)]
                h-px bg-white/20 backdrop-blur-sm mt-3
              "
            />
          </div>
        )}

        {/* Content area */}
        <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
          {children}
        </div>
      </div>
    </section>
  );
}
