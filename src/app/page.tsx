import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
