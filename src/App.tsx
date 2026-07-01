import { createTheme, Flex, MantineProvider, Modal } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { MainView } from "@/components/MainView/MainView";
import { LogoContext } from "@/context/logoContext";
import { type LogoSettingsType } from "@/types";
import { useState } from "react";
import { IconBox } from "@tabler/icons-react";
import "@mantine/core/styles.css";

const theme = createTheme({
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

export default function App() {
  const [logoSettings, setLogoSettings] = useState<LogoSettingsType>({
    icon: {
      icon: IconBox,
      size: 350,
      rotate: 0,
      strokeWidth: 1.75,
      color: "rgba(255, 255, 255, 1)",
      fillOpacity: 0,
      fill: "rgb(255, 255, 255)",
    },
    background: {
      rounded: 100,
      padding: 25,
      color: "rgba(0, 0, 0, 1)",
    },
  });

  return (
    <MantineProvider theme={theme}>
      <LogoContext value={{ logoSettings, setLogoSettings }}>
        <Header />
        <Flex flex={1}>
          <Navbar />
          <MainView />
        </Flex>
      </LogoContext>
    </MantineProvider>
  );
}
