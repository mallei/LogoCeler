import { type LogoSettingsType } from "@/types";
import { renderToStaticMarkup } from "react-dom/server";

export function generateLogoSVG(logoSettings: LogoSettingsType) {
  const LogoIcon = logoSettings.icon.icon;
  const logoIconSVG = renderToStaticMarkup(
    <LogoIcon
      size={logoSettings.icon.size}
      strokeWidth={logoSettings.icon.strokeWidth}
      color={logoSettings.icon.color}
      fillOpacity={logoSettings.icon.fillOpacity / 100}
      fill={logoSettings.icon.fill}
    />,
  );

  const backgroundSize = 512 - logoSettings.background.padding * 2;
  const iconPosition =
    (backgroundSize - logoSettings.icon.size) / 2 +
    logoSettings.background.padding;

  return `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect x="${logoSettings.background.padding}" y="${logoSettings.background.padding}" width="${backgroundSize}" height="${backgroundSize}" rx="${logoSettings.background.rounded}" ry="${logoSettings.background.rounded}" fill="${logoSettings.background.color}" />
  <g transform="translate(${iconPosition}, ${iconPosition}) rotate(${logoSettings.icon.rotate} ${logoSettings.icon.size / 2} ${logoSettings.icon.size / 2})">
    ${logoIconSVG}
  </g>
</svg>
`;
}
