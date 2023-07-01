import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

declare module "assets/theme" {
  const theme: Pick<ThemeProviderProps, "theme">;
}

export default theme;
