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
  onComplete: (bytes: number, filename: string) => void,
) {
  const blob = new Blob([logoSVG], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  if (format === "SVG") {
    const filename = `${name}.svg`;
    downloadFile(url, filename);
    onComplete(blob.size, filename);
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
      const filename = `${name}-${logoSize}x${logoSize}.png`;
      downloadFile(pngUrl, filename);

      URL.revokeObjectURL(url);
      onComplete(blob.size, filename);
    }, "image/png");
  };

  img.src = url;
}
