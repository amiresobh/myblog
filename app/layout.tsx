//Note:
//Modifi header tags

import type { Metadata, Viewport } from "next";

import "./globals.css";
import "./styles.css";
import "./main";

import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import LoadingComponent from "./components/LoadingComponent";

export const metadata: Metadata = {
  title: "Amir M. Sobhani | Freelancer",
  description: "Amir Mohammad is an independant creative developer from Iran. He loves helping organisations to build ambitious yet accessible web projects. , he also wriSometimestes in the third person.",
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
  colorScheme: 'only light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'font-IranianSans'}>
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
          <small className="made-in-wales">Amir Mohammad Sobhani Digital</small>
        </div>
      </body>
    </html>
  );
}
