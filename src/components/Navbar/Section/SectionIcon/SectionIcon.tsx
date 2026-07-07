import { ActionIcon, ColorInput, NumberInput } from "@mantine/core";
import {
  SectionWrapper,
  SectionField,
} from "@/components/Navbar/Section/Section";
import { use } from "react";
import { LogoContext } from "@/context/logoContext";
import { IconPicker } from "@/components/IconPicker/IconPicker";
import { useDisclosure } from "@mantine/hooks";
import { DynamicIcon } from "@/components/DynamicIcon/DynamicIcon";

export function SectionIcon() {
  const [logoSettings, setLogoSettings] = use(LogoContext);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <SectionWrapper>
      <SectionField
        mainLabel="Icon"
        secondaryLabel={logoSettings.icon.name.split("Icon")[1]}
      >
        <IconPicker
          opened={opened}
          onClose={close}
          onPick={(newValue) => {
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, name: newValue },
            }));
            close();
          }}
        />
        <ActionIcon variant="light" color="gray" size="xl" onClick={open}>
          <DynamicIcon
            name={logoSettings.icon.name}
            size={26}
            strokeWidth={logoSettings.icon.strokeWidth}
          />
        </ActionIcon>
      </SectionField>
      <SectionField mainLabel="Size" secondaryLabel="[0; 512]">
        <NumberInput
          variant="filled"
          suffix="px"
          value={logoSettings.icon.size}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, size: Number(newValue) },
            }))
          }
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
          value={logoSettings.icon.rotate}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, rotate: Number(newValue) },
            }))
          }
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
          value={logoSettings.icon.strokeWidth}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, strokeWidth: Number(newValue) },
            }))
          }
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
      <SectionField mainLabel="Icon Opacity" secondaryLabel="[0; 100]">
        <NumberInput
          variant="filled"
          suffix="%"
          value={logoSettings.icon.opacity}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, opacity: Number(newValue) },
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
      <SectionField mainLabel="Icon Color">
        <ColorInput
          variant="filled"
          format="rgb"
          value={logoSettings.icon.color}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, color: newValue },
            }))
          }
        />
      </SectionField>
      <SectionField mainLabel="Fill Opacity" secondaryLabel="[0; 100]">
        <NumberInput
          variant="filled"
          suffix="%"
          value={logoSettings.icon.fillOpacity}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, fillOpacity: Number(newValue) },
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
      <SectionField mainLabel="Fill Color">
        <ColorInput
          variant="filled"
          format="rgb"
          value={logoSettings.icon.fillColor}
          onChange={(newValue) =>
            setLogoSettings((prev) => ({
              ...prev,
              icon: { ...prev.icon, fillColor: newValue },
            }))
          }
        />
      </SectionField>
    </SectionWrapper>
  );
}
