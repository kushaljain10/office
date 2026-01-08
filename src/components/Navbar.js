import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#f9fafb",
        borderBottom: "3px solid #334155",
        padding: "1rem 2rem",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 0 #334155",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#334155",
            margin: 0,
            textAlign: "center",
          }}
        >
          The $OFFICE cult
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
