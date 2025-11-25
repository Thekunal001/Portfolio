import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Welcome to my personal portfolio. Explore my projects, skills, and experiences.",
  keywords: ["portfolio", "web developer", "projects", "skills", "resume"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Welcome to my personal portfolio. Explore my projects, skills, and experiences.",
    url: "https://yourwebsite.com",
    siteName: "Your Name",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Welcome to my personal portfolio. Explore my projects, skills, and experiences.",
    images: ["https://yourwebsite.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};