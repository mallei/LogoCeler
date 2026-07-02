import { type Icon } from "@tabler/icons-react";

export interface LogoSettingsType {
  icon: {
    icon: Icon;
    size: number;
    rotate: number;
    strokeWidth: number;
    color: string;
    fillOpacity: number;
    fill: string;
  };
  background: {
    rounded: number;
    padding: number;
    color: string;
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
