import { Button, Group, Text } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        <Text span size="lg" fw={700}>
          LogoCeler
        </Text>
        <Button
          leftSection={<IconDownload size={16} strokeWidth={1.75} />}
          fw={500}
        >
          Download
        </Button>
      </Group>
    </header>
  );
}
