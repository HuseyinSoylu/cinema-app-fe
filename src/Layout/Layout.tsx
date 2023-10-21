import { FC, PropsWithChildren } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { BottomNavigation } from "@/UI/BottomNavigation/BottomNavigation";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      {/* <BottomNavigation /> */}
    </>
  );
};
