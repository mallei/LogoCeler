import { createTheme, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import "@mantine/core/styles.css";
import "./App.css";

const theme = createTheme({
  fontFamily: "DMSans",
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Header />
    </MantineProvider>
  );
}
