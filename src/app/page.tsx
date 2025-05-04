import React from "react";
import "../styles/landing.css"; // Import the landing page CSS
import { AuroraBackground } from "../components/ui/aurora-background";
import { NavigationMenu } from "../components/ui/navigation-menu";
import SignIn from "../components/SignIn"; // SignIn component

export default function Home() {
  return (
    <AuroraBackground>
      <NavigationMenu />
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <h1>Planetary Deep-Sea Survival</h1>
          <p>Embark on an unforgettable underwater adventure!</p>
          <a href="/files/epic-game.zip" className="download-button">Download Now</a>
        </section>

        {/* Sign-In Section */}
        <section id="signin" className="signin">
          <SignIn />
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2>Game Features</h2>
          <ul>
            <li>Immersive gameplay</li>
            <li>Stunning graphics</li>
            <li>Multiplayer mode</li>
          </ul>
        </section>
      </div>
    </AuroraBackground>
  );
}