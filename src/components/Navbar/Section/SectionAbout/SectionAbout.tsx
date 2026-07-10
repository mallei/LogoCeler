import { Text, Anchor } from "@mantine/core";

export function SectionAbout() {
  return (
    <div style={{ color: "var(--mantine-color-gray-8)" }}>
      <Text size="sm">
        Made by{" "}
        <Anchor href="https://github.com/mallei" target="_blank">
          Maciej Jaśków 🦇
        </Anchor>
      </Text>
      <Text size="sm">
        Icons by{" "}
        <Anchor href="https://tabler.io/icons" target="_blank">
          Tabler
        </Anchor>
      </Text>
    </div>
  );
}
