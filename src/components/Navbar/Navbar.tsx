import { Stack, Tooltip, UnstyledButton } from "@mantine/core";
import {
  IconBrackets,
  IconBrush,
  IconPalette,
  type Icon,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";

interface NavbarLinkProps {
  icon: Icon;
  label: string;
}

function NavbarLink({ icon: LinkIcon, label }: NavbarLinkProps) {
  return (
    <Tooltip
      label={label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
    >
      <UnstyledButton className={classes.link}>
        <LinkIcon size={22} strokeWidth={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <Stack>
            {[
              { icon: IconBrush, label: "Icon" },
              { icon: IconPalette, label: "Background" },
            ].map((link) => (
              <NavbarLink {...link} key={link.label} />
            ))}
          </Stack>
          <NavbarLink icon={IconBrackets} label="About" />
        </div>
        <div className={classes.main}>...</div>
      </div>
    </nav>
  );
}
