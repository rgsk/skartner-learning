import App from "@/components/App";
import Providers from "@/components/Providers";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Skartner",
  description:
    "Your Partner in Skills Development, learn Data Structures and Algorithms, Math and more. Primarily useful for people wanting to get into Software Engineering and Machine Learning.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <Providers>
          <App>{children}</App>
        </Providers>
      </body>
    </html>
  );
}
