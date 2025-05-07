import React from "react";
import "../styles/landing.css"; // Import the landing page CSS
import { AuroraBackground } from "@/components/ui/aurora-background";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import SignIn from "../components/SignIn"; // SignIn component
import PlayersList from "../components/PlayersList";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import LayoutGridDemo from "@/components/ui/layout-grid-demo";


export default function Home() {
  return (
    <AuroraBackground>
      <NavigationMenu /> {/* Navbar is placed at the top */}
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="wave">
            PLANETARY DEEP SEA SURVIVAL
          </div>
          <p className="mt-4 text-lg text-gray-200">
            Dive into the depths and explore the mysteries of the ocean.
          </p>
          <a
            href="/files/PlanetaryDeepSeaSurvival.apk" // Replace with the actual path to your APK file
            download
            className="btn-6 mt-6 inline-block text-center text-white font-semibold no-underline"
          >
            <span>Download</span>
          </a>
        </section>

        {/* Sign-In Section */}
        <section id="signin" className="signin">
          <Sheet>
            <SheetTrigger asChild>
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                Sign In
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sign In</SheetTitle>
              </SheetHeader>
              <SignIn />
            </SheetContent>
          </Sheet>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <h2 className="text-2xl font-bold text-center mb-6">Game Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Immersive Gameplay</CardTitle>
                <CardDescription>
                  Dive into a realistic underwater world with stunning visuals and engaging mechanics.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stunning Graphics</CardTitle>
                <CardDescription>
                  Experience breathtaking underwater environments and creatures.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multiplayer Mode</CardTitle>
                <CardDescription>
                  Play with friends and explore the depths together.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="screenshots">
          <h2>Game Screenshots</h2>
          <div className="screenshot-gallery">
            <div className="screenshot-item">
              <img src="/images/screenshot1.jpg" alt="Screenshot 1" />
              <p>Explore the underwater world</p>
            </div>
            <div className="screenshot-item">
              <img src="/images/screenshot2.jpg" alt="Screenshot 2" />
              <p>Battle sea creatures</p>
            </div>
            <div className="screenshot-item">
              <img src="/images/screenshot3.jpg" alt="Screenshot 3" />
              <p>Survive the depths</p>
            </div>
          </div>
        </section>

        {/* Trailer Section */}
        <section id="trailer" className="trailer">
          <h2>Game Trailer</h2>
          <div className="trailer-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video link
              title="Game Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about">
          <h2 className="text-2xl font-bold text-center mb-6">About Us</h2>
          <p className="text-center text-lg text-gray-200 max-w-3xl mx-auto">
            Planetary Deep Sea Survival is a thrilling underwater adventure game that combines exploration, survival, and multiplayer gameplay. 
            Our mission is to create an immersive experience that allows players to dive into the mysteries of the ocean, battle sea creatures, 
            and uncover hidden treasures. Join us on this journey and explore the depths like never before!
          </p>
        </section>

        {/* Players Section */}
        <section id="players" className="players">
          <PlayersList />
        </section>

        {/* Footer Section */}
        <footer className="footer">
          <div className="text-center text-gray-400 py-4">
            <p>&copy; 2025 Planetary Deep Sea Survival. All rights reserved.</p>
            <p>
              Follow us on 
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Twitter</a>, 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Facebook</a>, and 
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">Instagram</a>.
            </p>
          </div>
        </footer>
      </div>
    </AuroraBackground>
  );
}