import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "./text-styles";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "brand",
    },
    body: {
      // bg: "brand.light", // sets body background color
      // color: "brand.navy", // optional: default text color
    },
  },
  theme: {
    textStyles,
    tokens: {
      colors: {
        light: {
          50: { value: "#FFFFFF" },
          100: { value: "#FCFDFD" },
          200: { value: "#F9FAFB" },
          300: { value: "#F5F8F9" },
          400: { value: "#F2F6F7" },
          500: { value: "#F0F4F6" },
          600: { value: "#B3C7D1" },
          700: { value: "#769AAD" },
          800: { value: "#496979" },
          900: { value: "#24343D" },
          950: { value: "#131C20" },
        },
        brand: {
          50: { value: "#E3F8FF" },
          100: { value: "#B3ECFF" },
          200: { value: "#81DEFD" },
          300: { value: "#5ED0FA" },
          400: { value: "#40C3F7" },
          500: { value: "#2BB0ED" },
          600: { value: "#1992D4" },
          700: { value: "#127FBF" },
          800: { value: "#0B69A3" },
          900: { value: "#035388" },
          light: { value: "#F0F4F6" },
          sky: { value: "#78CCEB" },
          blue: { value: "#1C9BC5" },
          slate: { value: "#60718A" },
          navy: { value: "#133149" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
