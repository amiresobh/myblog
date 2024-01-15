import type { Metadata, Viewport } from "next";
import { useState } from "react";

import "./globals.css";
import "./styles.css";
import "./main";

import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import LoadingComponent from "./components/LoadingComponent";

import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import Loading from "./components/Navbar/HireMe/Loading";
import Providers from "./Providers/Providers";

export const metadata: Metadata = {
  title: "امیرمحمد سبحانی | فریلنسر",
  description:
    "امیرمحمد توسعه دهنده ای مستقل است، علاقمند به آشنایی با افراد و سازمان ها و کمک به آن ها درجهت پیشرفت...",
  // openGraph:{
  //   siteName: 'Amir Mohammad Sobhani Digital',
  //   type: 'website',
  //   url: '/',
  //   title: 'Amir M. Sobhani | Freelancer',
  //   description: "Amir Mohammad is an independant creative developer from Iran. He loves helping organisations to build ambitious yet accessible web projects. , he also wriSometimestes in the third person.",
  // }
};
export const viewport: Viewport = {
  themeColor: "#aadcec",
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!font-IranianSans text-right">
      <body className={"font-IranianSans"}>
        <Providers>
          <LoadingComponent />
          <div className="pagewrap">
            <Navbar />
            <Menu />
            <main
              id="main-content"
              className="page-body page-body--header"
              tabIndex={-1}
            >
              {children}
            </main>
            <small className="made-in-wales">
              Amir Mohammad Sobhani Digital
            </small>
          </div>
        </Providers>
      </body>
    </html>
  );
}
