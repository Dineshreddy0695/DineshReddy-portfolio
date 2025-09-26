import { useMediaQuery } from "react-responsive";
import { Home } from "./home";         // desktop version
import { HomeMobile } from "./homemobile"; 

export const HomeWrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 }); // Tailwind's `sm`

  return (
    <>
      {isMobile ? <HomeMobile /> : <Home />}
    </>
  );
};
