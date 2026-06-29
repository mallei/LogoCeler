import { NumberInput, ColorInput } from "@mantine/core";
import {
  SectionField,
  SectionWrapper,
} from "@/components/Navbar/Section/Section";

export function SectionBackground() {
  return (
    <SectionWrapper>
      <SectionField mainLabel="Rounded" secondaryLabel="[0; 256]">
        <NumberInput
          variant="filled"
          suffix="px"
          defaultValue={100}
          min={0}
          max={256}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Padding" secondaryLabel="[0; 128]">
        <NumberInput
          variant="filled"
          suffix="px"
          defaultValue={25}
          min={0}
          max={128}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Background Color">
        <ColorInput
          variant="filled"
          format="rgba"
          defaultValue="rgba(0, 0, 0, 1)"
        />
      </SectionField>
    </SectionWrapper>
  );
}
