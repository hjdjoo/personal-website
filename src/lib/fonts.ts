import { DM_Sans, Vollkorn, EB_Garamond, Alegreya, Alegreya_Sans } from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const vollkorn = Vollkorn({
  subsets: ["latin"],
  display: "swap"
})

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap"
})

export const alegreya = Alegreya({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"]
})