import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cameron Johnson | Personal Portfolio",
  description:
    "Cameron Johnson is a full-stack developer with 10 years for experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pb-1 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] h-[31.25rem] w-[31.25rem] right-[11rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>

        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] h-[31.25rem] w-[50rem] left-[-35rem] rounded-full blur-[10rem] sm:w-[68.5rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
