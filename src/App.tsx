import { MANTINE_THEME, DEFAULT_LOGO_SETTINGS } from "@/constants";
import { Flex, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { MainView } from "@/components/MainView/MainView";
import { LogoContext } from "@/context/logoContext";
import { type LogoSettingsType } from "@/types";
import { useState } from "react";
import "@mantine/core/styles.css";
import { useHotkeys } from "@mantine/hooks";

export default function App() {
  const [logoSettings, setLogoSettings] = useState<LogoSettingsType>(
    DEFAULT_LOGO_SETTINGS,
  );

  useHotkeys([
    ["mod + shift + R", () => setLogoSettings(DEFAULT_LOGO_SETTINGS)],
  ]);

  return (
    <MantineProvider theme={MANTINE_THEME}>
      <LogoContext value={{ logoSettings, setLogoSettings }}>
        <Header />
        <Flex flex={1} mih={0}>
          <Navbar />
          <MainView />
        </Flex>
      </LogoContext>
    </MantineProvider>
  );
}
