import { extendTheme } from "@chakra-ui/react";
import { Mulish } from "@next/font/google";

const nextFont = Mulish({
  weight: ["700"],
  subsets: ["latin"],
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#151515",
      150: "#F2F2F2",
      200: "#ffffff",
      250: "#000000",
     
    },
  },
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
});

export default theme;
