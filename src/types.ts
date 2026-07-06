import * as TablerIcons from "@tabler/icons-react";

export type IconName = keyof typeof TablerIcons;

export interface LogoSettingsType {
  icon: {
    name: IconName;
    size: number;
    rotate: number;
    strokeWidth: number;
    opacity: number;
    color: string;
    fillOpacity: number;
    fillColor: string;
  };
  background: {
    rounded: number;
    padding: number;
    opacity: number;
    color: string;
    strokeWidth: number;
    strokeOpacity: number;
    strokeColor: string;
  };
}

export interface LogoDownloadSettingsType {
  name: string;
  format: "PNG" | "SVG";
  size:
    | "16x16"
    | "32x32"
    | "48x48"
    | "64x64"
    | "128x128"
    | "256x256"
    | "512x512"
    | "1024x1024"
    | "2048x2048";
}
