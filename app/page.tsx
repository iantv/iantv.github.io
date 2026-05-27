import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection projects={projects} />
      <MediaSection />
      <ContactSection />
    </>
  );
}
