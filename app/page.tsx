import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection projects={projects} />
      <MediaSection />
      <ContactSection />
    </>
  );
}
