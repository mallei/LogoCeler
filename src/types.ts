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
  size?: number;
}
