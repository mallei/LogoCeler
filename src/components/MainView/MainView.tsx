import { IconBox } from "@tabler/icons-react";
import classes from "./MainView.module.css";

export function MainView() {
  return (
    <main className={classes.main}>
      <div className={classes.logoPreview}>
        <div
          style={{
            width: 512,
            height: 512,
            padding: 25,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 1)",
              borderRadius: 100,
            }}
          >
            <IconBox
              size={350}
              rotate={0}
              strokeWidth={1.75}
              color="rgba(255, 255, 255, 1)"
              fillOpacity={0}
              fill="rgb(255, 255, 255)"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
