import { NumberInput, ColorInput } from "@mantine/core";
import {
  SectionField,
  SectionWrapper,
} from "@/components/Navbar/Section/Section";
import { use } from "react";
import { LogoContext } from "@/context/logoContext";

export function SectionBackground() {
  const { logoSettings, setLogoSettings } = use(LogoContext);

  return (
    <SectionWrapper>
      <SectionField mainLabel="Rounded" secondaryLabel="[0; 256]">
        <NumberInput
          variant="filled"
          suffix="px"
          value={logoSettings.background.rounded}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              background: { ...prev.background, rounded: Number(newValue) },
            }))
          }
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
          value={logoSettings.background.padding}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              background: { ...prev.background, padding: Number(newValue) },
            }))
          }
          min={0}
          max={128}
          clampBehavior="strict"
          allowDecimal={false}
          stepHoldDelay={500}
          stepHoldInterval={100}
          w="75%"
        />
      </SectionField>
      <SectionField mainLabel="Background Opacity" secondaryLabel="[0; 100]">
        <NumberInput
          variant="filled"
          suffix="%"
          value={logoSettings.background.opacity}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              background: { ...prev.background, opacity: Number(newValue) },
            }))
          }
          min={0}
          max={100}
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
          format="rgb"
          value={logoSettings.background.color}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              background: { ...prev.background, color: newValue },
            }))
          }
        />
      </SectionField>
    </SectionWrapper>
  );
}
