import { ActionIcon, ColorInput, NumberInput } from "@mantine/core";
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
      <SectionField mainLabel="Size" secondaryLabel="[0; 512]">
        <NumberInput
          variant="filled"
          suffix="px"
          defaultValue={350}
          min={0}
          max={512}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Rotate" secondaryLabel="[-180; 180]">
        <NumberInput
          variant="filled"
          suffix="&deg;"
          defaultValue={0}
          min={-180}
          max={180}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Stroke Width" secondaryLabel="[0.25; 6.00]">
        <NumberInput
          variant="filled"
          suffix="px"
          defaultValue={1.75}
          min={0.25}
          max={6.0}
          step={0.25}
          clampBehavior="strict"
          decimalScale={2}
          fixedDecimalScale
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Icon Color">
        <ColorInput
          variant="filled"
          format="rgba"
          defaultValue="rgba(255, 255, 255, 1)"
        />
      </SectionField>
      <SectionField mainLabel="Fill Opacity" secondaryLabel="[0; 100]">
        <NumberInput
          variant="filled"
          suffix="%"
          defaultValue={0}
          min={0}
          max={100}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Fill Color">
        <ColorInput
          variant="filled"
          format="rgb"
          defaultValue="rgb(255, 255, 255)"
        />
      </SectionField>
    </SectionWrapper>
  );
}
