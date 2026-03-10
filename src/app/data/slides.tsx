import { ReactNode } from "react";
import { Slide1 } from "../components/slides/Slide1";
import { Slide2 } from "../components/slides/Slide2";
import { Slide3 } from "../components/slides/Slide3";
import { Slide4 } from "../components/slides/Slide4";
import { Slide5 } from "../components/slides/Slide5";
import { Slide6 } from "../components/slides/Slide6";
import { Slide7 } from "../components/slides/Slide7";
import { Slide8 } from "../components/slides/Slide8";
import { GenericSlide } from "../components/slides/GenericSlide";

import { Slide9 } from "../components/slides/Slide9";
import { Slide10 } from "../components/slides/Slide10";
import { Slide11 } from "../components/slides/Slide11";
import { Slide12 } from "../components/slides/Slide12";
import { Slide14 } from "../components/slides/Slide14";
import { Slide15 } from "../components/slides/Slide15";
import { Slide16 } from "../components/slides/Slide16";

export interface SlideData {
  id: number;
  title: string;
  component: ReactNode;
}

export const slides: SlideData[] = [
  { id: 1, title: "Cover", component: <Slide1 /> },
  { id: 2, title: "The Executive Brief", component: <Slide2 /> },
  { id: 3, title: "The Trinity Concept", component: <Slide3 /> },
  { id: 4, title: "Helping Our Community", component: <Slide4 /> },
  { id: 5, title: "Who is coming?", component: <Slide5 /> },
  { id: 6, title: "Economic Engine", component: <Slide6 /> },
  { id: 7, title: "Sponsorship Tiers", component: <Slide7 /> },
  { id: 8, title: "Partners", component: <Slide8 /> },
  { id: 9, title: "Schedule & Timeline", component: <Slide9 /> },
  { id: 10, title: "Marketing Strategy", component: <Slide10 /> },
  { id: 11, title: "Site Map & Logistics", component: <Slide11 /> },
  { id: 12, title: "Future Expansion", component: <Slide14 /> },
  { id: 13, title: "Sponsors & Partners", component: <Slide12 /> },
  { id: 14, title: "Contact & Closing", component: <Slide15 /> },
  { id: 15, title: "Gallery", component: <Slide16 /> },
];
