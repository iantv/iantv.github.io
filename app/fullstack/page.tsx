import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { cvProjects } from "@/data/projects";

export const metadata = {
  title: "CV & AI — tanya_pro_vr",
  description: "Computer Vision & AI portfolio — OpenCV, Dlib, YOLOv3, Gaussian Splatting, 3D reconstruction, C++.",
};

export default function CVPage() {
  return (
    <>
      <Hero mode="cv" />
      <ExperienceSection />
      <ProjectsSection projects={cvProjects} mode="cv" />
      <ContactSection />
    </>
  );
}
