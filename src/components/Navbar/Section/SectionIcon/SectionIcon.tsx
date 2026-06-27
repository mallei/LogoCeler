import { ActionIcon } from "@mantine/core";
import {
  SectionWrapper,
  SectionField,
} from "@/components/Navbar/Section/Section";
import { IconBox } from "@tabler/icons-react";

export function SectionIcon() {
  return (
    <SectionWrapper>
      <SectionField mainLabel="Icon" secondaryLabel="Box">
        <ActionIcon variant="light" color="gray" size="xl">
          <IconBox size={26} strokeWidth={1.75} />
        </ActionIcon>
      </SectionField>
      <SectionField mainLabel="Icon" secondaryLabel="Box">
        <ActionIcon variant="light" color="gray" size="xl">
          <IconBox size={26} strokeWidth={1.75} />
        </ActionIcon>
      </SectionField>
    </SectionWrapper>
  );
}
