import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
    title: "QazaqStroy",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <title>QazaqStroy</title>
            <link rel="icon" href="/qazaqstroy/logo.svg" />
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
