import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"flex-end", padding:"0 1em 1em 0"}}>
      <p>© {currentYear} Eetu Pienimaa</p>
    </div>
  );
}
