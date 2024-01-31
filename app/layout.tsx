import { PropsWithChildren } from "react";
import Footer from "@components/Footer";
import Header from "@components/Header";
import "./global.css";

export const metadata = {
  title: "Next Folio",
  description: "Showcase developer projects",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
