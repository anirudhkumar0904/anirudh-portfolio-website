import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { CommandPalette } from "@/components/CommandPalette";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { EasterEgg } from "@/components/EasterEgg";
import { EngineeringNotes } from "@/components/EngineeringNotes";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <EasterEgg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <EngineeringNotes />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
