export type FilterTag = "vr-ar" | "cv" | "3d" | "research";

export interface Project {
  id: number;
  title: string;
  description: string;
  filterTags: FilterTag[];
  displayTags: string[];
  featured: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "XR Platform — Real-Time 3D Reconstruction",
    description: "Led end-to-end development of an XR platform with Gaussian Splatting pipeline for real-time 3D rendering. Managed 8-person cross-functional team (VR, ML, DevOps, QA).",
    filterTags: ["vr-ar", "3d", "cv"],
    displayTags: ["XR", "3D", "Tech Lead"],
    featured: true,
    tech: ["Unity", "C#", "WebXR", "three.js", "CloudXR", "Gaussian Splatting", "Python"],
  },
  {
    id: 2,
    title: "Spherum 3D — VR Volumetric Player",
    description: "Led VR application for volumetric video playback on Oculus Quest and HTC Vive. Drove the project from R&D to public release on Steam.",
    filterTags: ["vr-ar", "3d"],
    displayTags: ["VR", "3D"],
    featured: true,
    liveUrl: "https://store.steampowered.com/app/1581680/Spherum_3D/",
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    id: 3,
    title: "Gaussian Splatting Pipeline",
    description: "Real-time 3D reconstruction pipeline using Gaussian Splatting for XR visualization. Optimized rendering and data processing for real-time performance in XR environments.",
    filterTags: ["cv", "3d", "vr-ar"],
    displayTags: ["CV", "3D", "XR"],
    featured: true,
    tech: ["Python", "C#", "Unity", "CloudXR", "3D Reconstruction"],
  },
  {
    id: 4,
    title: "Hairstyle AR — Real-Time Face Tracking",
    description: "Real-time AR application for interactive 3D hairstyle try-on. Face detection and tracking with OpenCV/Dlib, 3D rendering with OpenGL. Open-source: 15★, 7 forks.",
    filterTags: ["cv", "vr-ar"],
    displayTags: ["CV", "AR", "OpenGL"],
    featured: true,
    sourceUrl: "https://github.com/iantv/AR-Hair",
    tech: ["C++", "Qt5", "OpenCV", "Dlib", "OpenGL"],
  },
  {
    id: 5,
    title: "Coin Recognition — Sberbank",
    description: "Real-time coin detection and classification with YOLOv3. Dataset of 400k+ annotated images, ~200 classes, >85% accuracy. Demonstrated at Eastern Economic Forum 2019.",
    filterTags: ["cv"],
    displayTags: ["CV", "AI", "Python"],
    featured: true,
    tech: ["Python", "Darknet (YOLOv3)", "OpenCV", "CVAT", "imgaug"],
  },
  {
    id: 6,
    title: "VR Training Simulator — Dubai Municipality",
    description: "VR training system for municipal employees covering water treatment facility operations. Includes automated level generation via procedural algorithms.",
    filterTags: ["vr-ar"],
    displayTags: ["VR", "Training"],
    featured: true,
    tech: ["Unity", "C#", "Unity Bolt", "Odin Inspector", "I2 Localization"],
  },
  {
    id: 7,
    title: "Englishville — VR Language Learning",
    description: "VR-based English language learning app with interactive NPCs, real-time speech recognition and immersive communicative scenarios.",
    filterTags: ["vr-ar", "research"],
    displayTags: ["VR", "Research"],
    featured: false,
    liveUrl: "https://vrnti.ru/englishville/main",
    tech: ["Unreal Engine 4", "C++", "Blueprint", "Python", "Microsoft Cognitive Services"],
  },
  {
    id: 8,
    title: "Holo Interior — Mixed Reality Design",
    description: "Mixed reality prototype for Microsoft HoloLens enabling interior design: wallpaper changes and furniture placement with real-time cost estimation.",
    filterTags: ["vr-ar"],
    displayTags: ["MR", "HoloLens"],
    featured: false,
    tech: ["Unity", "C#", "MRTK", "HoloLens"],
  },
  {
    id: 9,
    title: "AR Primorye — Regional Investment Platform",
    description: "Mobile AR application demonstrating investment projects, regional industry centers and brands of Primorsky Region for government showcase.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Mobile"],
    featured: false,
    tech: ["Unity", "C#", "ARKit", "ARCore"],
  },
  {
    id: 10,
    title: "AR Exhibition Stands",
    description: "Exhibition stand AR app using marker recognition to trigger 3D graphics, animations and interactive elements for Primorsky Region events.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Vuforia"],
    featured: false,
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 11,
    title: "Tower Defense: Save The Queen",
    description: "Mobile AR tower defense game. Team lead: two developers, two 3D designers. Marker-based AR with real-time physics and game mechanics.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Game"],
    featured: false,
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 12,
    title: "MATE ROV 2017 — Control System",
    description: "Control interface for an underwater robot (ROV). International Finals, Los Angeles. Real-time UDP control, video stream and operator dashboard in Qt.",
    filterTags: ["cv", "research"],
    displayTags: ["CV", "C++", "Robotics"],
    featured: false,
    tech: ["C++", "Qt", "Qt Multimedia", "SDL", "UDP"],
  },
];
