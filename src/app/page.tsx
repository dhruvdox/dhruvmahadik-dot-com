import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Nav from "@/components/Nav";
import OffTheClock from "@/components/OffTheClock";
import { DiagonalRule } from "@/components/Primitives";
import ShortFilm from "@/components/ShortFilm";
import Ventures from "@/components/Ventures";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        {/* Motif use 1 of 3 — hands off from the intro to the proof. */}
        <div className="bg-paper">
          <DiagonalRule tone="red" />
        </div>

        <Ventures />
        <Work />
        <Credentials />
        <Music />
        <ShortFilm />

        {/* Motif use 2 of 3 — cools the page back down after the music and film. */}
        <div className="bg-paper">
          <DiagonalRule tone="ink" />
        </div>

        <OffTheClock />
        <Contact />
      </main>
    </>
  );
}
