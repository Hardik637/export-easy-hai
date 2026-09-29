import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exporteasyhai.com"),
  title: "Export Easy Hai | Learn to Export from India",
  description:
    "Learn how to start and grow an export business from India with practical courses, buyer verification, export guidance and real-world strategies.",
  keywords: [
    "Export Easy Hai",
    "export from India",
    "export business courses",
    "Rahul Makwana",
    "import export training",
    "find international buyers",
    "export documentation",
    "India to the world",
  ],
  openGraph: {
    title: "Export Easy Hai | Learn to Export from India",
    description:
      "Turn Indian products into global opportunities. Practical guidance, real strategies and zero confusion.",
    url: "https://exporteasyhai.com",
    siteName: "Export Easy Hai",
    images: [
      {
        url: "/images/hero-blood-moon.jpg",
        width: 1200,
        height: 630,
        alt: "Export Easy Hai - Quit 9 to 5. Build Bigger.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Easy Hai | Turn Indian Products into Global Opportunities",
    description: "Learn how to start and grow an export business from India with practical guidance.",
    images: ["/images/hero-blood-moon.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[#050505] text-white selection:bg-[#E50920] selection:text-white">
        {children}
      </body>
    </html>
  );
}
