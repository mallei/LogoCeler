import * as TablerIcons from "@tabler/icons-react";
import { type IconName } from "@/types";
import { type IconProps } from "@tabler/icons-react";

interface DynamicIconProps extends IconProps {
  name: IconName;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = TablerIcons[name] as TablerIcons.Icon;

  return <IconComponent {...props} />;
}
