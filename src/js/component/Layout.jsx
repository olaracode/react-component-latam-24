import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="mt-5 p-5 bg-secondary">
      <div className="text-center">
        Hecho por la cohorte 24 de latam con cariño
      </div>
    </footer>
  );
};
