import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/shared"; 
import { Provider } from "@/provider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

// export const metadata: Metadata = {
//     title: "Hiroek: Create, Manage & Grow Your Events in One Place",
//     description: "Plan events, sell tickets, manage attendees, and send updates easily with Hiroek. The simple all-in-one platform for event organisers to grow their audience.",
// };


export const metadata: Metadata = {
    title: "Hiroek: Create, Manage & Grow Your Events in One Place",
    description:
      "Plan events, sell tickets, manage attendees, and send updates easily with Hiroek. The simple all-in-one platform for event organisers to grow their audience.",
  
    openGraph: {
      title: "Hiroek: Create, Manage & Grow Your Events in One Place",
      description:
        "Plan events, sell tickets, manage attendees, and send updates easily with Hiroek.",
      url: "https://hiroek.io",
      siteName: "Hiroek",
      images: [
        {
          url: "/title.jpg", // full URL recommended
          width: 1200,
          height: 630,
          alt: "Hiroek Event Platform",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  
    twitter: {
      card: "summary_large_image",
      title: "Hiroek: Create, Manage & Grow Your Events in One Place",
      description:
        "Plan events, sell tickets, manage attendees, and send updates easily.",
      images: ["/title.jpg"],
    },
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.className}>
            <body className="antialiased w-screen overflow-x-hidden ">
                <Provider>
                    <div id="home" />
                    <div className=" fixed top-3 inset-x-3 lg:inset-x-4 z-50 ">
                        <Navbar />
                    </div>
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
