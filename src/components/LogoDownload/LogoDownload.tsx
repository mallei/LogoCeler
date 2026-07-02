import { type LogoDownloadSettingsType } from "@/types";
import { Button, Grid, Modal, Select, TextInput } from "@mantine/core";
import { LogoContext } from "@/context/logoContext";
import { use } from "react";
import { generateLogoSVG } from "@/helpers/generateLogoSVG";
import { useState } from "react";

interface LogoDownloadProps {
  opened: boolean;
  onClose: () => void;
}

export function LogoDownload({ opened, onClose }: LogoDownloadProps) {
  const { logoSettings } = use(LogoContext);
  const [name, setName] = useState("logo");
  const [format, setFormat] = useState<
    LogoDownloadSettingsType["format"] | null
  >("PNG");
  const [size, setSize] = useState<LogoDownloadSettingsType["size"] | null>(
    "512x512",
  );

  return (
    <Modal opened={opened} onClose={onClose} title="Download Logo" size="xs">
      <Grid>
        <Grid.Col span={8}>
          <TextInput
            variant="filled"
            label="Name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </Grid.Col>
        <Grid.Col span={5}>
          <Select
            variant="filled"
            label="Format"
            allowDeselect={false}
            withCheckIcon={false}
            data={["PNG", "SVG"]}
            value={format}
            onChange={setFormat}
          />
        </Grid.Col>
        <Grid.Col span={7}>
          <Select
            variant="filled"
            label="Size (px)"
            allowDeselect={false}
            withCheckIcon={false}
            data={[
              "16x16",
              "32x32",
              "48x48",
              "64x64",
              "128x128",
              "256x256",
              "512x512",
              "1024x1024",
              "2048x2048",
            ]}
            value={size}
            onChange={setSize}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            onClick={() => console.log(generateLogoSVG(logoSettings))}
            variant="default"
            color="gray"
          >
            Save 'logo-512x512.png'
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}
