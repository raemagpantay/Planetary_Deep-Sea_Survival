
export const metadata = {
  title: 'Planetary Deep-Sea Survival',
  description: 'Dive into an epic underwater adventure with Planetary Deep-Sea Survival. Explore, survive, and conquer the depths!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}