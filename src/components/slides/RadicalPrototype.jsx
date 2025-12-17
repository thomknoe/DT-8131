import React from "react";

export default function RadicalPrototype() {
  return (
    <div style={{ 
      width: "100%", 
      height: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center"
    }}>
      <iframe 
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          maxHeight: "100%",
          aspectRatio: "16 / 9"
        }}
        src="https://www.youtube.com/embed/8GXWMtUED08?si=E0sxcwqpyrxmVWX2" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
}

