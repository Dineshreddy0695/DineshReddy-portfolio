
import { useMediaQuery } from "react-responsive";
import { Navbar } from "./Navbar";           // desktop navbar
import { NavbarMobile } from "./nav-mobile";

export const NavbarWrapper = () => {
  // Detect screen size
  const isMobile = useMediaQuery({ maxWidth: 768 }); // 768px and below = mobile/tablet

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
    </>
  );
};
