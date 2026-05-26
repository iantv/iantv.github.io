export type FilterTag = "vr-ar" | "cv" | "3d" | "research" | "robotics" | "ai";

export interface Project {
  id: number;
  title: string;
  description: string;
  filterTags: FilterTag[];
  displayTags: string[];
  featured: boolean;
  imageUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
  videoUrl?: string;
  extraLinks?: { label: string; url: string }[];
  tech: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "XR Platform for Real-Time 3D Reconstruction",
    description: "Led architecture and delivery of a real-time XR platform for 3D reconstruction and visualization using Gaussian Splatting. Coordinated a cross-functional team of 8 across ML, XR, backend and infrastructure.",
    filterTags: ["vr-ar", "3d", "cv"],
    displayTags: ["3D Gaussian Splatting", "WEBXR"],
    featured: true,
    tech: ["Three.js", "MTS Cloud S3", "WebXR", "Python", "Gaussian Splatting"],
  },
  {
    id: 3,
    title: "3D GS Avatars with Facial Expressions",
    description: "Conducted R&D on photorealistic Gaussian Splatting avatars with facial expression reconstruction and animation for immersive real-time XR interaction.",
    filterTags: ["cv", "3d", "research"],
    displayTags: ["3D Avatar", "3D Gaussian Splatting"],
    featured: true,
    imageUrl: "/3d-gs-avatars.jpg",
    tech: ["Python", "Gaussian Splatting", "3D Reconstruction"],
  },
  {
    id: 4,
    title: "Hairstyle AR — Real-Time Face Tracking",
    imageUrl: "https://static.tildacdn.com/tild6231-6232-4635-b464-333338356361/cfD9pU955vo.jpg",
    description: "Developed a real-time AR application for virtual hairstyle try-on with stable face tracking and 3D alignment. Open-source project with community adoption.",
    filterTags: ["cv", "vr-ar"],
    displayTags: ["AR", "Face Detection", "Face Tracking"],
    featured: true,
    sourceUrl: "https://github.com/iantv/AR-Hair",
    tech: ["C++", "Qt5", "OpenCV", "Dlib", "OpenGL", "GLSL"],
  },
  {
    id: 2,
    title: "Spherum 3D — VR Volumetric Player",
    imageUrl: "https://static.tildacdn.com/tild6439-3261-4461-b638-303339373565/spherum.jpg",
    description: "Developed VR volumetric platform for AI-generated 3D avatars with multiplayer interaction and social VR environments. Delivered the product from R&D to public Steam release.",
    filterTags: ["vr-ar", "3d"],
    displayTags: ["VR", "3D Avatar"],
    featured: true,
    liveUrl: "https://store.steampowered.com/app/2223230/Spherum_3D/",
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    id: 5,
    title: "Coin Recognition — Sberbank",
    imageUrl: "https://static.tildacdn.com/tild3665-3933-4339-b361-633465616234/what-coins-does-Sber.webp",
    description: "Developed a real-time coin recognition system for Sberbank using large-scale computer vision pipelines and production-grade ML models.",
    filterTags: ["cv"],
    displayTags: ["Object Detector"],
    featured: true,
    tech: ["Python", "Object Detector", "OpenCV", "CVAT", "imgaug"],
  },
  {
    id: 6,
    title: "VR Training Simulator — Dubai Municipality",
    imageUrl: "https://static.tildacdn.com/tild6633-6164-4034-b731-316436623938/croc.jpg",
    description: "Developed a VR training simulator for industrial water treatment operations with procedural scenario generation and performance optimization for VR environments.",
    filterTags: ["vr-ar"],
    displayTags: ["VR", "Training"],
    featured: true,
    extraLinks: [
      { label: "Press", url: "https://nntc.digital/news/nntc-implement-virtual-reality-training-system-dubai-municipality/" },
    ],
    tech: ["Unity", "C#", "Unity Bolt", "Odin Inspector", "I2 Localization"],
  },
  {
    id: 7,
    title: "Englishville — VR Language Learning",
    imageUrl: "https://static.tildacdn.com/tild3862-3865-4638-b535-636563346265/photo_2020-08-21_10-.jpg",
    description: "Built a VR language learning platform with interactive NPCs, speech recognition and immersive conversational scenarios for real-time communication practice.",
    filterTags: ["vr-ar", "ai"],
    displayTags: ["VR", "AI"],
    featured: false,
    liveUrl: "https://vrnti.ru/englishville/main",
    tech: ["Unreal Engine 4", "C++", "Blueprint", "Python", "Microsoft Cognitive Services"],
  },
  {
    id: 8,
    title: "Holo Interior — Mixed Reality Design",
    imageUrl: "https://static.tildacdn.com/tild6532-6139-4966-b263-333437303030/2019-02-14_16-21-06.png",
    description: "Developed a mixed reality interior design prototype for Microsoft HoloLens with interactive environment customization and spatial UI interaction.",
    filterTags: ["vr-ar"],
    displayTags: ["MR", "HoloLens"],
    featured: false,
    tech: ["Unity", "C#", "MRTK", "HoloLens"],
  },
  {
    id: 9,
    title: "AR Primorye — Regional Investment Platform",
    imageUrl: "https://static.tildacdn.com/tild6637-3237-4135-b037-376662313963/photo.png",
    description: "Built a cross-platform AR platform showcasing regional investment projects and industrial infrastructure for public and government presentations.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Mobile"],
    featured: false,
    videoUrl: "https://youtu.be/5-mhz0I2h3Y",
    tech: ["Unity", "C#", "ARKit", "ARCore"],
  },
  {
    id: 10,
    title: "AR Exhibition Stands",
    imageUrl: "https://static.tildacdn.com/tild3761-3939-4761-b965-396534303366/noroot.png",
    description: "Developed AR applications for interactive exhibition stands with real-time 3D content, animation and presentation workflows for regional events.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Mobile"],
    featured: false,
    videoUrl: "https://youtu.be/jtvjUatXvDs",
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 11,
    title: "Tower Defense: Save The Queen",
    imageUrl: "https://static.tildacdn.com/tild6333-6134-4164-b632-633062303663/noroot.png",
    description: "Led development of a mobile AR game with real-time interaction, physics-based gameplay systems and marker-based augmented reality mechanics.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Mobile"],
    featured: false,
    videoUrl: "https://youtu.be/qjsfA_SgsL8",
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 12,
    title: "MATE ROV 2017 — Remote Control System",
    imageUrl: "/mate-rov-team.jpg",
    description: "Developed a real-time remote control system for an underwater robotic vehicle used in the MATE ROV International Finals competition.",
    filterTags: ["cv", "robotics"],
    displayTags: ["CV", "Robotics"],
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=H3cqg-JGqDM",
    extraLinks: [
      { label: "Spec Sheet", url: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2017/TheCenterForRoboticsDevelopment_RC-ROV_SpecSheet_2017.pdf" },
      { label: "Tech Report", url: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2017/TheCenterForRoboticsDevelopment_RC-ROV_TechnicalDocumentation_2017.pdf" },
    ],
    tech: ["C++", "Qt", "Qt Multimedia", "SDL", "UDP"],
  },
];
