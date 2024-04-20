import { extendTheme } from "@chakra-ui/react";
import localFont from "@next/font/local";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const avenirNext = localFont({
  src: [
    {
      path: "../assets/fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-poppins",
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#151515",
      150: "#F2F2F2",
      200: "#ffffff",
      250: "#000000",
      280: "#333333",
      300: "rgb(255, 255, 255, 0.75)",
      380: "rgb(255, 255, 255, 0.65)",
      350: "rgb(255, 255, 255, 0.3)",
      400: "rgb(0, 0, 0, 0.8)",
      420: "rgb(0, 0, 0, 0.1)",
      450: "rgb(0, 0, 0, 0.7)",
      480: "rgb(0, 0, 0, 0.3)",
      500: "#f7f8f9",
      550: "#e1dfdf",
      600: "#3E99B7",
      650: "#A4CEDC",
      700: "#FFEDE0",
      750: "#A45114",
      800: "#b67443",
      850: "#326301",
      870: "#5B8234",
      900: "#E8EFE1",
      950: "#825EE4",
      1000: "#CDB6FF",
      1050: "#010C31",
      1100: "#2C4189",
      1150: "#BBC9E9",
    },
  },
  fonts: {
    body: nunito.style.fontFamily,
    heading: avenirNext.style.fontFamily,
  },
});

export default theme;
