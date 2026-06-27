import { Stack, Tooltip, UnstyledButton } from "@mantine/core";
import {
  IconBrackets,
  IconBrush,
  IconPalette,
  type Icon,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { useState } from "react";

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

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <Stack gap="xs">
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
        <div className={classes.main}>
          {active === 0 && <span>Icon</span>}
          {active === 1 && <span>Background</span>}
          {active === 2 && <span>About</span>}
        </div>
      </div>
    </nav>
  );
}
