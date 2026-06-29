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
