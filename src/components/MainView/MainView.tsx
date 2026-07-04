import { use } from "react";
import { LogoContext } from "@/context/logoContext";
import { generateLogoSVG } from "@/helpers/generateLogoSVG";
import { Button, Tooltip } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useCounter, useHotkeys } from "@mantine/hooks";
import classes from "./MainView.module.css";

export function MainView() {
  const { logoSettings } = use(LogoContext);
  const [logoPreviewZoom, { increment, decrement, reset }] = useCounter(1, {
    min: 0.25,
    max: 1.5,
    step: 0.25,
  });
  const logoPreviewSize = 512 * logoPreviewZoom;

  useHotkeys([
    ["mod + -", () => decrement()],
    ["mod + =", () => increment()],
    ["mod + shift + [plus]", () => increment()],
    ["mod + 0", () => reset()],
  ]);

  return (
    <main className={classes.main}>
      <Tooltip
        label={`Logo Preview | ${logoPreviewSize}x${logoPreviewSize} px`}
        withArrow
      >
        <div
          className={classes.logoPreview}
          style={{ lineHeight: 0 }}
          dangerouslySetInnerHTML={{
            __html: generateLogoSVG(logoSettings, logoPreviewSize),
          }}
        />
      </Tooltip>
      <Button.Group className={classes.zoomBtn}>
        <Button
          variant="light"
          color="gray"
          size="compact-sm"
          onClick={decrement}
          disabled={logoPreviewZoom === 0.25}
        >
          <IconMinus size={18} strokeWidth={1.75} />
        </Button>
        <Button.GroupSection variant="light" color="gray" size="compact-sm">
          {logoPreviewZoom * 100}%
        </Button.GroupSection>
        <Button
          variant="light"
          color="gray"
          size="compact-sm"
          onClick={increment}
          disabled={logoPreviewZoom === 1.5}
        >
          <IconPlus size={18} strokeWidth={1.75} />
        </Button>
      </Button.Group>
    </main>
  );
}
