import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { xrProjects } from "@/data/projects";

export const metadata = {
  title: "XR & 3D — tanya_pro_vr",
  description: "XR & 3D engineering portfolio — Unity, Unreal Engine, WebXR, Gaussian Splatting, real-time 3D systems.",
};

export default function XRPage() {
  return (
    <>
      <Hero mode="xr" />
      <ExperienceSection />
      <ProjectsSection projects={xrProjects} mode="xr" />
      <ContactSection />
    </>
  );
}
