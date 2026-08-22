import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";

const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
});
const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: true,
});
const About = dynamic(() => import("@/components/About"), {
  ssr: true,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: true,
});
const Organizations = dynamic(() => import("@/components/Organizations"), {
  ssr: true,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsCounter />
        <Projects />
        <TechStack />
        <About />
        <Experience />
        <Organizations />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
