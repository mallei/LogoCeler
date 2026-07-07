import { MANTINE_THEME, DEFAULT_LOGO_SETTINGS } from "@/constants";
import { Flex, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { MainView } from "@/components/MainView/MainView";
import { LogoContext } from "@/context/logoContext";
import { type LogoSettingsType } from "@/types";
import { useLocalStorage } from "@mantine/hooks";
import "@mantine/core/styles.css";

export default function App() {
  const [logoSettings, setLogoSettings, resetLogoSettings] =
    useLocalStorage<LogoSettingsType>({
      key: "logo-settings",
      defaultValue: DEFAULT_LOGO_SETTINGS,
    });

  return (
    <MantineProvider theme={MANTINE_THEME}>
      <LogoContext value={[logoSettings, setLogoSettings, resetLogoSettings]}>
        <Header />
        <Flex flex={1} mih={0}>
          <Navbar />
          <MainView />
        </Flex>
      </LogoContext>
    </MantineProvider>
  );
}
