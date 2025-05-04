import * as React from "react"

export const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <ul className="flex justify-center space-x-6 p-4 bg-blue-600 text-white">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#features" className="hover:underline">Features</a></li>
        <li><a href="#trailer" className="hover:underline">Trailer</a></li>
        <li><a href="#screenshots" className="hover:underline">Screenshots</a></li>
        <li><a href="#players" className="hover:underline">Players</a></li>
        <li><a href="#about" className="hover:underline">About Us</a></li>
      </ul>
    </nav>
  );
};
