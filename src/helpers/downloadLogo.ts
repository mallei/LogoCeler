import { type LogoDownloadSettingsType } from "@/types";

function downloadFile(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

export function downloadLogo(
  logoSVG: string,
  { name, size, format }: LogoDownloadSettingsType,
) {
  const blob = new Blob([logoSVG], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  if (format === "SVG") {
    downloadFile(url, `${name}.svg`);
    return;
  }

  const img = new Image();
  img.onload = () => {
    const logoSize = size!;

    const canvas = document.createElement("canvas");
    canvas.width = logoSize;
    canvas.height = logoSize;

    const ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0, logoSize, logoSize);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const pngUrl = URL.createObjectURL(blob);
      downloadFile(pngUrl, `${name}-${logoSize}x${logoSize}.png`);

      URL.revokeObjectURL(url);
    }, "image/png");
  };

  img.src = url;
}
