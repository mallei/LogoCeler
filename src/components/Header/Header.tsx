import { Button, Group, Text } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { LogoDownload } from "@/components/LogoDownload/LogoDownload";
import { notifications } from "@mantine/notifications";
import classes from "./Header.module.css";

export function Header() {
  const [opened, { open, close }] = useDisclosure(false);

  useHotkeys([["mod + S", () => open()]]);

  return (
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        <Text span size="lg" fw={700}>
          LogoCeler
        </Text>
        <Button
          onClick={open}
          leftSection={<IconDownload size={16} strokeWidth={1.75} />}
          fw={500}
        >
          Download
        </Button>
        <LogoDownload
          opened={opened}
          onClose={() => {
            notifications.clean();
            close();
          }}
        />
      </Group>
    </header>
  );
}
