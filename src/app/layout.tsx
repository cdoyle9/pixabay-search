import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../queries/QueryProvider";
import ImageDetailProvider from "@/store/ImageDetail";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixabay Image Search",
  description: "Query the catalog of images on Pixabay and see their details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <ImageDetailProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </html>
      </ImageDetailProvider>
    </ReactQueryProvider>
  );
}
