import { use } from "react";
import { LogoContext } from "@/context/logoContext";
import classes from "./MainView.module.css";

export function MainView() {
  const { logoSettings } = use(LogoContext);
  const LogoIcon = logoSettings.icon.icon;

  return (
    <main className={classes.main}>
      <div className={classes.logoPreview}>
        <div
          style={{
            width: 512,
            height: 512,
            padding: logoSettings.background.padding,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: logoSettings.background.color,
              borderRadius: logoSettings.background.rounded,
            }}
          >
            <LogoIcon
              size={logoSettings.icon.size}
              strokeWidth={logoSettings.icon.strokeWidth}
              color={logoSettings.icon.color}
              fillOpacity={logoSettings.icon.fillOpacity / 100}
              fill={logoSettings.icon.fill}
              style={{ rotate: `${logoSettings.icon.rotate}deg` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
