import type { ImageMetadata } from "astro";
import opim from "../assets/logos/opim.png";
import avpa from "../assets/logos/avpa.png";
import avpn from "../assets/logos/avpn.png";
import icm from "../assets/logos/icm.png";
import japanIdfi from "../assets/logos/japan-idfi.png";
import pensions from "../assets/logos/pensions-for-purpose.png";
import iii from "../assets/logos/impact-investing-institute.png";
import impactEurope from "../assets/logos/impact-europe.png";
import bsr from "../assets/logos/bsr.png";
import cgap from "../assets/logos/cgap.jpg";
import blink from "../assets/logos/blink.png";
import buildersVision from "../assets/logos/builders-vision.png";
import blueHaven from "../assets/logos/blue-haven.png";
import fcdo from "../assets/logos/fcdo.png";
import ubs from "../assets/logos/ubs.png";

export interface Partner {
  name: string;
  logo: ImageMetadata;
  /** rendered box inside the 185×115 slot, from Figma */
  w: number;
  h: number;
  href?: string;
}

export const partnerNetworks: Partner[] = [
  { name: "Operating Principles for Impact Management", logo: opim, w: 185, h: 55 },
  { name: "AVPA", logo: avpa, w: 185, h: 72 },
  { name: "AVPN", logo: avpn, w: 185, h: 75 },
  { name: "Impact Capital Managers", logo: icm, w: 185, h: 112 },
  { name: "Japan Impact-driven Financing Initiative", logo: japanIdfi, w: 185, h: 41 },
  { name: "Pensions for Purpose", logo: pensions, w: 185, h: 78 },
  { name: "Impact Investing Institute", logo: iii, w: 155, h: 87 },
  { name: "Impact Europe", logo: impactEurope, w: 185, h: 88 },
  { name: "BSR", logo: bsr, w: 185, h: 73 },
  { name: "CGAP", logo: cgap, w: 115, h: 115 },
];

export const stewardshipCouncil: Partner[] = [
  { name: "Blink CV", logo: blink, w: 185, h: 93 },
  { name: "Builders Vision", logo: buildersVision, w: 185, h: 61 },
  { name: "Blue Haven Initiative", logo: blueHaven, w: 115, h: 115 },
  { name: "Foreign, Commonwealth & Development Office", logo: fcdo, w: 185, h: 63 },
  { name: "UBS", logo: ubs, w: 185, h: 67 },
];
