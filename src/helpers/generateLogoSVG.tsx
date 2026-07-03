import type { LogoSettingsType } from "@/types";
import { renderToStaticMarkup } from "react-dom/server";

export function generateLogoSVG(
  logoSettings: LogoSettingsType,
  logoSVGSize: number,
): string {
  const LogoIcon = logoSettings.icon.icon;
  const logoIconSVG = renderToStaticMarkup(<LogoIcon />);

  const parser = new DOMParser();
  const doc = parser.parseFromString(logoIconSVG, "image/svg+xml");
  const innerSVG = doc.documentElement.innerHTML.replace(
    /\sxmlns="http:\/\/www\.w3\.org\/2000\/svg"/g,
    "",
  );

  const backgroundSize = 512 - logoSettings.background.padding * 2;
  const iconPosition =
    (backgroundSize - logoSettings.icon.size) / 2 +
    logoSettings.background.padding;
  const logoIconScale = logoSettings.icon.size / 24;

  return `
<svg
  width="${logoSVGSize}"
  height="${logoSVGSize}"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="${logoSettings.background.padding}"
    y="${logoSettings.background.padding}"
    width="${backgroundSize}"
    height="${backgroundSize}"
    rx="${logoSettings.background.rounded}"
    ry="${logoSettings.background.rounded}"
    fill-opacity="${logoSettings.background.opacity / 100}"
    fill="${logoSettings.background.color}"
  />
  <g
    transform="translate(${iconPosition}, ${iconPosition}) rotate(${logoSettings.icon.rotate} ${logoSettings.icon.size / 2} ${logoSettings.icon.size / 2}) scale(${logoIconScale})"
    stroke-width="${logoSettings.icon.strokeWidth}"
    stroke-opacity="${logoSettings.icon.opacity / 100}"
    stroke="${logoSettings.icon.color}"
    fill-opacity="${logoSettings.icon.fillOpacity / 100}"
    fill="${logoSettings.icon.fillColor}"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${innerSVG}
  </g>
</svg>
`;
}
