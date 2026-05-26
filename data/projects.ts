export type FilterTag = "vr-ar" | "cv" | "3d" | "research";

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
    description: "Led development of an XR platform for real-time 3D scene reconstruction and visualization using Gaussian Splatting. Coordinated cross-functional work across ML, XR, backend and DevOps teams.",
    filterTags: ["vr-ar", "3d", "cv"],
    displayTags: ["XR", "3D", "Tech Lead"],
    featured: true,
    tech: ["Unity", "C#", "WebXR", "three.js", "CloudXR", "Gaussian Splatting", "Python"],
  },
  {
    id: 2,
    title: "Spherum 3D — VR Volumetric Player",
    imageUrl: "https://static.tildacdn.com/tild6439-3261-4461-b638-303339373565/spherum.jpg",
    description: "Led VR application for volumetric video playback on Oculus Quest and HTC Vive. Drove the project from R&D to public release on Steam.",
    filterTags: ["vr-ar", "3d"],
    displayTags: ["VR", "3D"],
    featured: true,
    liveUrl: "https://store.steampowered.com/app/2223230/Spherum_3D/",
    tech: ["Unity", "C#", "SteamVR", "AWS", "Firebase", "Photon SDK"],
  },
  {
    id: 3,
    title: "Research on AI 3D Avatars with Facial Expressions",
    description: "Conducted R&D on photorealistic 3D avatars using Gaussian Splatting with facial expression reconstruction and animation for immersive XR interaction.",
    filterTags: ["cv", "3d", "research"],
    displayTags: ["Research", "3D", "CV"],
    featured: true,
    tech: ["Python", "Gaussian Splatting", "Unity", "C#", "3D Reconstruction"],
  },
  {
    id: 4,
    title: "Hairstyle AR — Real-Time Face Tracking",
    imageUrl: "https://static.tildacdn.com/tild6231-6232-4635-b464-333338356361/cfD9pU955vo.jpg",
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
    imageUrl: "https://static.tildacdn.com/tild3665-3933-4339-b361-633465616234/what-coins-does-Sber.webp",
    description: "Real-time coin detection and classification with YOLOv3. Dataset of 400k+ annotated images, ~200 classes, >85% accuracy. Demonstrated at Eastern Economic Forum 2019.",
    filterTags: ["cv"],
    displayTags: ["CV", "AI", "Python"],
    featured: true,
    tech: ["Python", "Darknet (YOLOv3)", "OpenCV", "CVAT", "imgaug"],
  },
  {
    id: 6,
    title: "VR Training Simulator — Dubai Municipality",
    imageUrl: "https://static.tildacdn.com/tild6633-6164-4034-b731-316436623938/croc.jpg",
    description: "VR training system for municipal employees covering water treatment facility operations. Includes automated level generation via procedural algorithms.",
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
    imageUrl: "https://static.tildacdn.com/tild6532-6139-4966-b263-333437303030/2019-02-14_16-21-06.png",
    description: "Mixed reality prototype for Microsoft HoloLens enabling interior design: wallpaper changes and furniture placement with real-time cost estimation.",
    filterTags: ["vr-ar"],
    displayTags: ["MR", "HoloLens"],
    featured: false,
    tech: ["Unity", "C#", "MRTK", "HoloLens"],
  },
  {
    id: 9,
    title: "AR Primorye — Regional Investment Platform",
    imageUrl: "https://static.tildacdn.com/tild6637-3237-4135-b037-376662313963/photo.png",
    description: "Mobile AR application demonstrating investment projects, regional industry centers and brands of Primorsky Region for government showcase.",
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
    description: "Exhibition stand AR app using marker recognition to trigger 3D graphics, animations and interactive elements for Primorsky Region events.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Vuforia"],
    featured: false,
    videoUrl: "https://youtu.be/jtvjUatXvDs",
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 11,
    title: "Tower Defense: Save The Queen",
    imageUrl: "https://static.tildacdn.com/tild6333-6134-4164-b632-633062303663/noroot.png",
    description: "Mobile AR tower defense game. Team lead: two developers, two 3D designers. Marker-based AR with real-time physics and game mechanics.",
    filterTags: ["vr-ar"],
    displayTags: ["AR", "Game"],
    featured: false,
    videoUrl: "https://youtu.be/qjsfA_SgsL8",
    tech: ["Unity", "C#", "Vuforia SDK"],
  },
  {
    id: 12,
    title: "MATE ROV 2017 — Control System",
    imageUrl: "/mate-rov-team.jpg",
    description: "Control interface for an underwater robot (ROV). International Finals, Los Angeles. Real-time UDP control, video stream and operator dashboard in Qt.",
    filterTags: ["cv", "research"],
    displayTags: ["CV", "C++", "Robotics"],
    featured: false,
    videoUrl: "https://www.youtube.com/watch?v=H3cqg-JGqDM",
    extraLinks: [
      { label: "Spec Sheet", url: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2017/TheCenterForRoboticsDevelopment_RC-ROV_SpecSheet_2017.pdf" },
      { label: "Tech Report", url: "https://20693798.fs1.hubspotusercontent-na1.net/hubfs/20693798/TechReportArchives/2017/TheCenterForRoboticsDevelopment_RC-ROV_TechnicalDocumentation_2017.pdf" },
    ],
    tech: ["C++", "Qt", "Qt Multimedia", "SDL", "UDP"],
  },
];
