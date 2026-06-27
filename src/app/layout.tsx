import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Mercy Muimi | Full-Stack Developer & UI/UX Designer",
    template: "%s | Mercy Muimi",
  },

  description:
    "Mercy Muimi is a Full-Stack Developer and UI/UX Designer specializing in Next.js, React, Django, API integrations, modern web applications, and intuitive digital experiences.",

  keywords: [
    "Mercy Muimi",
    "Mercy Kathin Muimi",
    "Full Stack Developer",
    "UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Frontend Developer",
    "Backend Developer",
    "API Integration",
    "Web Developer Kenya",
    "Portfolio",
  ],

  authors: [{ name: "Mercy Muimi" }],
  creator: "Mercy Muimi",

  openGraph: {
    title: "Mercy Muimi | Full-Stack Developer & UI/UX Designer",
    description:
      "Building modern web applications, API-powered systems, and user-focused digital experiences.",
    url: "https://portfoliov0-nine.vercel.app/",
    siteName: "Mercy Muimi Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/heroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Mercy Muimi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mercy Muimi Portfolio",
    description:
      "Full-Stack Developer & UI/UX Designer building modern digital experiences.",
    images: ["/images/heroimage.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://portfoliov0-nine.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}