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
      300: "rgb(255, 255, 255, 0.75)",
      350: "rgb(255, 255, 255, 0.3)",
      400: "rgb(0, 0, 0, 0.8)",
      450: "rgb(0, 0, 0, 0.7)",
      500: "#f7f8f9",
      550: "#e1dfdf",
      600: "#3E99B7",
      650: "#A4CEDC",
    },
  },
  fonts: {
    body: nunito.style.fontFamily,
    heading: avenirNext.style.fontFamily,
  },
});

export default theme;
