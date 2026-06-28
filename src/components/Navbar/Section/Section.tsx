import { Stack, Group, Text } from "@mantine/core";
import classes from "./Section.module.css";

interface SectionWrapperProps {
  children: React.ReactNode;
}

export function SectionWrapper({ children }: SectionWrapperProps) {
  return <Stack gap={28}>{children}</Stack>;
}

interface SectionFieldProps {
  mainLabel: string;
  secondaryLabel?: string;
  children: React.ReactNode;
}

export function SectionField({
  mainLabel,
  secondaryLabel,
  children,
}: SectionFieldProps) {
  return (
    <Stack gap={8}>
      <Group className={classes.fieldLabel} justify="space-between">
        <Text span size="sm">
          {mainLabel}
        </Text>
        {secondaryLabel && (
          <Text span size="xs">
            {secondaryLabel}
          </Text>
        )}
      </Group>
      {children}
    </Stack>
  );
}
