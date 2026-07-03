import { use } from "react";
import { LogoContext } from "@/context/logoContext";
import classes from "./MainView.module.css";
import { generateLogoSVG } from "@/helpers/generateLogoSVG";

export function MainView() {
  const { logoSettings } = use(LogoContext);

  return (
    <main className={classes.main}>
      <div
        className={classes.logoPreview}
        dangerouslySetInnerHTML={{
          __html: generateLogoSVG(logoSettings, "512x512"),
        }}
      ></div>
    </main>
  );
}
