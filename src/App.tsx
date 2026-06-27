import { createTheme, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import { Navbar } from "@/components/Navbar/Navbar";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "DMSans",
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Navbar />
    </MantineProvider>
  );
}
