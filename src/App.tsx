import { createTheme, Flex, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import { MainView } from "@/components/MainView/MainView";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "DMSans",
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Flex flex={1}>
        <Navbar />
        <MainView />
      </Flex>
    </MantineProvider>
  );
}
