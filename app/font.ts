import { 
    Inter as Font_Inter,
    Josefin_Sans as Font_Josefin_Sans,
    Source_Serif_4 as Font_Source_Serif_4,
    Open_Sans as Font_Open_Sans,
} from "next/font/google";

export const inter = Font_Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    adjustFontFallback: false,
});

export const openSans = Font_Open_Sans({
    subsets: ["latin"],
    variable: "--font-openSans",
    // display: "swap",
    adjustFontFallback: false,
});

export const josefinSans = Font_Josefin_Sans({
    subsets: ["latin"],
    variable: "--font-josefin-sans",
    // display: "swap",
    adjustFontFallback: false,
});
export const serif = Font_Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
    adjustFontFallback: false,
});
