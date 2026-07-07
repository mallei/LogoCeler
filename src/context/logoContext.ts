import { type LogoSettingsType } from "@/types";
import { type UseStorageReturnValue } from "@mantine/hooks";
import { createContext } from "react";

export const LogoContext = createContext<
  UseStorageReturnValue<LogoSettingsType>
>({} as UseStorageReturnValue<LogoSettingsType>);
