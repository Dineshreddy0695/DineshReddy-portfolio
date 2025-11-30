
import { useMediaQuery } from "react-responsive";
import { Navbar } from "./Navbar";          
import { NavbarMobile } from "./nav-mobile";

export const NavbarWrapper = () => {
 
  const isMobile = useMediaQuery({ maxWidth: 768 }); 

  return (
    <>
      {isMobile ? <NavbarMobile /> : <Navbar />}
    </>
  );
};
