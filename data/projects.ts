export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "xr" | "cv" | "both";
  featured: boolean;
  liveUrl?: string;
  sourceUrl?: string;
  tech: string[];
}

export const xrProjects: Project[] = [
  {
    id: 1,
    title: "XR Platform — Real-Time 3D Reconstruction",
    description: "Led end-to-end development of an XR platform with Gaussian Splatting pipeline for real-time 3D rendering and visualization. Managed 8-person cross-functional team.",
    tags: ["xr", "3d", "lead"],
    category: "xr",
    featured: true,
    tech: ["Unity", "C#", "WebXR", "three.js", "CloudXR", "Gaussian Splatting", "Python"],
  },
  {
    id: 2,
    title: "Spherum 3D — VR Volumetric Player",
    description: "Led VR application for volumetric video playback on Oculus Quest and HTC Vive. Drove the project from early development to public release on Steam.",
    tags: ["xr"],
    category: "xr",
    featured: true,
    liveUrl: "https://store.steampowered.com/app/1581680/Spherum_3D/",
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    id: 3,
    title: "VR Training Simulator — Dubai Municipality",
    description: "VR training system for municipal employees covering water treatment facility operations. Includes automated level generation via procedural algorithms.",
    tags: ["xr"],
    category: "xr",
    featured: true,
    tech: ["Unity", "C#", "Unity Bolt", "Odin Inspector", "I2 Localization"],
  },
  {
    id: 4,
    title: "Englishville — VR Language Learning",
    description: "VR-based English language learning application with interactive NPCs, real-time speech recognition via Microsoft Cognitive Services and immersive scenarios.",
    tags: ["xr", "research"],
    category: "xr",
    featured: true,
    liveUrl: "https://vrnti.ru/englishville/main",
    tech: ["Unreal Engine 4", "C++", "Blueprint", "Python", "Microsoft Cognitive Services"],
  },
  {
    id: 5,
    title: "Holo Interior — Mixed Reality Design",
    description: "Mixed reality prototype for Microsoft HoloLens enabling interior design: wallpaper changes and furniture placement with real-time cost estimation.",
    tags: ["xr"],
    category: "xr",
    featured: false,
    tech: ["Unity", "C#", "MRTK", "HoloLens"],
  },
  {
    id: 6,
    title: "AR Primorye — Regional Investment Platform",
    description: "Mobile AR application demonstrating investment projects, regional industry centers and brands of Primorsky Region for government showcase.",
    tags: ["xr"],
    category: "xr",
    featured: false,
    tech: ["Unity", "C#", "ARKit", "ARCore"],
  },
  {
    id: 7,
    title: "AR Exhibition Stands",
    description: "Exhibition stand AR application using marker recognition to trigger 3D graphics, animations and interactive elements for Primorsky Region events.",
    tags: ["xr"],
    category: "xr",
    featured: false,
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 8,
    title: "Tower Defense: Save The Queen",
    description: "Mobile AR tower defense game built as team lead with two developers and two 3D designers. Marker-based AR with real-time physics and game mechanics.",
    tags: ["xr"],
    category: "xr",
    featured: false,
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
];

export const cvProjects: Project[] = [
  {
    id: 9,
    title: "Hairstyle AR — Real-Time Face Tracking",
    description: "Real-time AR application for interactive 3D hairstyle try-on. Face detection and tracking pipeline with OpenCV/Dlib, 3D rendering with OpenGL. Open-source: 15★, 7 forks.",
    tags: ["cv", "xr"],
    category: "both",
    featured: true,
    sourceUrl: "https://github.com/iantv/AR-Hair",
    tech: ["C++", "Qt5", "OpenCV", "Dlib", "OpenGL"],
  },
  {
    id: 10,
    title: "Coin Recognition — Sberbank",
    description: "Real-time coin detection and classification with YOLOv3. Dataset of 400k+ annotated images across ~200 classes. >85% accuracy. Demonstrated at Eastern Economic Forum 2019.",
    tags: ["cv", "ai"],
    category: "cv",
    featured: true,
    tech: ["Python", "Darknet (YOLOv3)", "OpenCV", "CVAT", "imgaug"],
  },
  {
    id: 11,
    title: "Gaussian Splatting Pipeline",
    description: "Real-time 3D reconstruction pipeline using Gaussian Splatting for XR visualization. Optimized rendering and data processing for real-time performance in XR environments.",
    tags: ["cv", "3d", "xr"],
    category: "both",
    featured: true,
    tech: ["Python", "C#", "Unity", "CloudXR", "3D Reconstruction"],
  },
  {
    id: 12,
    title: "MATE ROV 2017 — Control System",
    description: "Control interface for an underwater robotic system (ROV). International Finals, Los Angeles. Real-time UDP control, video stream, and operator dashboard built in Qt.",
    tags: ["cv"],
    category: "cv",
    featured: false,
    tech: ["C++", "Qt", "Qt Multimedia", "SDL", "UDP networking"],
  },
];

export const allProjects = [...xrProjects, ...cvProjects];
