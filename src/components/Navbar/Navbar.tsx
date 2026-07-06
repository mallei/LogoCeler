import { ScrollArea, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import {
  IconBrackets,
  IconBrush,
  IconPalette,
  type Icon,
} from "@tabler/icons-react";
import { SectionIcon } from "@/components/Navbar/Section/SectionIcon/SectionIcon";
import { SectionBackground } from "@/components/Navbar/Section/SectionBackground/SectionBackground";
import { useState } from "react";
import { useHotkeys } from "@mantine/hooks";
import classes from "./Navbar.module.css";

interface NavbarLinkProps {
  icon: Icon;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavbarLink({
  icon: LinkIcon,
  label,
  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <Tooltip
      label={label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
    >
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <LinkIcon size={22} strokeWidth={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function Navbar() {
  const [active, setActive] = useState(0);

  useHotkeys([
    ["mod + 1", () => setActive(0)],
    ["mod + 2", () => setActive(1)],
    ["mod + 3", () => setActive(2)],
  ]);

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <Stack gap={6}>
            {[
              { icon: IconBrush, label: "Icon" },
              { icon: IconPalette, label: "Background" },
            ].map((link, index) => (
              <NavbarLink
                {...link}
                key={link.label}
                active={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </Stack>
          <NavbarLink
            icon={IconBrackets}
            label="About"
            active={2 === active}
            onClick={() => setActive(2)}
          />
        </div>
        <ScrollArea
          className={classes.main}
          offsetScrollbars
          scrollbarSize={8}
          scrollHideDelay={0}
        >
          {active === 0 && <SectionIcon />}
          {active === 1 && <SectionBackground />}
          {active === 2 && <span>About</span>}
        </ScrollArea>
      </div>
    </nav>
  );
}
