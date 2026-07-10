import { DynamicIcon } from "@/components/DynamicIcon/DynamicIcon";
import type { LogoSettingsType } from "@/types";
import { renderToStaticMarkup } from "react-dom/server";

export function generateLogoSVG(
  logoSettings: LogoSettingsType,
  logoSVGSize?: number,
): string {
  const logoIconSVG = renderToStaticMarkup(
    <DynamicIcon name={logoSettings.icon.name} />,
  );

  const parser = new DOMParser();
  const doc = parser.parseFromString(logoIconSVG, "image/svg+xml");
  const innerSVG = doc.documentElement.innerHTML.replace(
    /\sxmlns="http:\/\/www\.w3\.org\/2000\/svg"/g,
    "",
  );

  const backgroundSize =
    512 -
    logoSettings.background.padding * 2 -
    logoSettings.background.strokeWidth;
  const backgroundPosition =
    logoSettings.background.padding + logoSettings.background.strokeWidth / 2;
  const iconPosition =
    (backgroundSize - logoSettings.icon.size) / 2 + backgroundPosition;
  const logoIconScale = logoSettings.icon.size / 24;

  return `
<svg ${logoSVGSize ? `width="${logoSVGSize}" height="${logoSVGSize}" ` : ""}viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="${backgroundPosition}"
    y="${backgroundPosition}"
    width="${backgroundSize}"
    height="${backgroundSize}"
    rx="${logoSettings.background.rounded - logoSettings.background.strokeWidth / 2}"
    ry="${logoSettings.background.rounded - logoSettings.background.strokeWidth / 2}"
    fill-opacity="${logoSettings.background.opacity / 100}"
    fill="${logoSettings.background.color}"
    stroke-width="${logoSettings.background.strokeWidth}"
    stroke-opacity="${logoSettings.background.strokeOpacity / 100}"
    stroke="${logoSettings.background.strokeColor}"
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
