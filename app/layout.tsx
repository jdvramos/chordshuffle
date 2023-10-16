import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

export const metadata: Metadata = {
    title: "ChordShuffle",
    description:
        "ChordShuffle enables guitarists to practice changing chords at every bar count automatically. It will generate random chords in different time signatures, and users can control the speed of chord transitions.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="h-full">
                    <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
                        <Navbar />
                    </div>
                    <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                        <Sidebar />
                    </div>
                    <main className="md:pl-56 pt-[80px] h-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
