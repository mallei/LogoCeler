import { type LogoSettingsType } from "@/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface LogoContextType {
  logoSettings: LogoSettingsType;
  setLogoSettings: Dispatch<SetStateAction<LogoSettingsType>>;
}

export const LogoContext = createContext<LogoContextType>(
  {} as LogoContextType,
);
