import { Button, Grid, Modal, Select, TextInput } from "@mantine/core";

interface LogoDownloadProps {
  opened: boolean;
  onClose: () => void;
}

export function LogoDownload({ opened, onClose }: LogoDownloadProps) {
  return (
    <Modal opened={opened} onClose={onClose} title="Download Logo" size="xs">
      <Grid>
        <Grid.Col span={8}>
          <TextInput variant="filled" label="Name" defaultValue="logo" />
        </Grid.Col>
        <Grid.Col span={5}>
          <Select
            variant="filled"
            label="Format"
            allowDeselect={false}
            withCheckIcon={false}
            data={["PNG", "SVG"]}
            defaultValue="PNG"
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
            defaultValue="512x512"
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <Button variant="default" color="gray">
            Save 'logo-512x512.png'
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
}
