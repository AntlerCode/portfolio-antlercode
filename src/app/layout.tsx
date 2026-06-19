import type { Metadata } from "next";
import { Newsreader, Spline_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/* Three families, loaded & self-hosted by next/font.
   Each exposes a CSS variable that globals.css maps to --serif / --sans / --mono. */
const serif = Newsreader({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500"],
    variable: "--ff-serif",
    display: "swap",
});
const sans = Spline_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--ff-sans",
    display: "swap",
});
const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--ff-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "AntlerCode",
    description: "Roaming the edge of code.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${serif.variable} ${sans.variable} ${mono.variable}`}
        >
        <body>{children}</body>
        </html>
    );
}
