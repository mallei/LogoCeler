import { type LogoSettingsType } from "@/types";
import { createTheme, Modal } from "@mantine/core";

export const MANTINE_THEME = createTheme({
  fontFamily: "DMSans",
  components: {
    Modal: Modal.extend({
      styles: {
        title: {
          fontWeight: 500,
        },
      },
      defaultProps: {
        centered: true,
        transitionProps: { duration: 0 },
        overlayProps: { color: "var(--mantine-color-gray-0)" },
      },
    }),
  },
});

export const DEFAULT_LOGO_SETTINGS: LogoSettingsType = {
  icon: {
    name: "IconBox",
    size: 350,
    rotate: 0,
    strokeWidth: 1.75,
    opacity: 100,
    color: "rgb(255, 255, 255)",
    fillOpacity: 0,
    fillColor: "rgb(255, 255, 255)",
  },
  background: {
    rounded: 100,
    padding: 25,
    opacity: 100,
    color: "rgb(0, 0, 0)",
    strokeWidth: 0,
    strokeOpacity: 100,
    strokeColor: "rgb(255, 255, 255)",
  },
};
