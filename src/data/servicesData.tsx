import IconPr from "../assets/services/icons/pr.png";
import IconAe from "../assets/services/icons/ae.png";
import IconDavinci from "../assets/services/icons/davinci.png";
import IconPs from "../assets/services/icons/ps.png";
import IconAi from "../assets/services/icons/ai.png";
import IconFigma from "../assets/services/icons/figma.png";
import IconCanva from "../assets/services/icons/canva.png";
import IconCinema4d from "../assets/services/icons/cinema4d.png";
import IconBlender from "../assets/services/icons/blender.png";
import IconAa from "../assets/services/icons/aa.png";
import IconVscode from "../assets/services/icons/vscode.png";
import IconReact from "../assets/services/icons/react.png";
import IconHtml from "../assets/services/icons/html.png";
import IconCss from "../assets/services/icons/css.png";
import IconUe from "../assets/services/icons/ue.png";
import IconOculus from "../assets/services/icons/oculus.png";

import ImgVideography from "../assets/services/videography.png";
import ImgGraphicDesign from "../assets/services/graphic design.png";
import ImgMotionGraphic from "../assets/services/motion graphic.png";
import ImgWebDev from "../assets/services/web development.png";
import ImgVr from "../assets/services/vr.png";

export interface SoftwareItem {
  icon: string;
  name: string;
}

export interface ServiceItem {
  title: string;
  description: React.ReactNode;
  image: string;
  howWeHelp: string[];
  software: SoftwareItem[];
}

export const servicesData: ServiceItem[] = [
  {
    title: "Videography",
    description: (
      <>
        <strong>Visual Storytelling that Inspires and Connects</strong>
        <br />
        MAK Production provides professional video and photo services to help
        your business stand out across every platform.
      </>
    ),
    image: ImgVideography,
    howWeHelp: [
      "Company Profile Video",
      "Event Documentation",
      "Commercial & Product Video",
      "Photography Services",
    ],
    software: [
      { icon: IconPr, name: "Adobe Premiere Pro" },
      { icon: IconAe, name: "Adobe After Effects" },
      { icon: IconDavinci, name: "DaVinci Resolve" },
    ],
  },
  {
    title: "Graphic Design",
    description: (
      <>
        <strong>Crafting Visual Identities that Speak Your Brand</strong>
        <br />
        If you're looking to build a beautiful, functional, and memorable brand
        from scratch, our team delivers results beyond expectations.
      </>
    ),
    image: ImgGraphicDesign,
    howWeHelp: [
      "Logo & Brand Identity",
      "Print & Digital Design",
      "Marketing Collateral",
      "Packaging Design",
    ],
    software: [
      { icon: IconPs, name: "Adobe Photoshop" },
      { icon: IconAi, name: "Adobe Illustrator" },
      { icon: IconFigma, name: "Figma" },
      { icon: IconCanva, name: "Canva" },
    ],
  },
  {
    title: "Motion Graphic",
    description: (
      <>
        <strong>Turning Ideas into Engaging Motion Experiences</strong>
        <br />
        We create high-quality animations from script and storyboard to final
        visuals, bringing your message to life in a unique and memorable way.
      </>
    ),
    image: ImgMotionGraphic,
    howWeHelp: [
      "Explainer Video",
      "2D/3D Motion Design",
      "Brand Animation",
      "Infographic Animation",
    ],
    software: [
      { icon: IconAe, name: "Adobe After Effects" },
      { icon: IconCinema4d, name: "Cinema 4D" },
      { icon: IconBlender, name: "Blender" },
      { icon: IconAa, name: "Adobe Animate" },
    ],
  },
  {
    title: "Web Development",
    description: (
      <>
        <strong>Building Smart, Responsive, and Modern Websites</strong>
        <br />
        We are committed to delivering professional websites with stunning
        designs, great performance, and features that match your business needs.
      </>
    ),
    image: ImgWebDev,
    howWeHelp: [
      "Corporate Website",
      "Landing Page Design",
      "E-Commerce Development",
      "Maintenance & Optimization",
    ],
    software: [
      { icon: IconVscode, name: "VS Code" },
      { icon: IconReact, name: "React" },
      { icon: IconHtml, name: "HTML5" },
      { icon: IconCss, name: "CSS3" },
    ],
  },
  {
    title: "Virtual Reality",
    description: (
      <>
        <strong>Immersive Virtual Experiences for Business Growth</strong>
        <br />
        MAK Pro is dedicated to developing content and utilizing VR technology
        to deliver interactive experiences that enhance your business
        engagement.
      </>
    ),
    image: ImgVr,
    howWeHelp: [
      "Virtual Tour Creation",
      "VR Training Experience",
      "Product Simulation",
      "Interactive 3D Showcase",
    ],
    software: [
      { icon: IconUe, name: "Unreal Engine" },
      { icon: IconOculus, name: "Meta Oculus" },
      { icon: IconBlender, name: "Blender" },
    ],
  },
];
