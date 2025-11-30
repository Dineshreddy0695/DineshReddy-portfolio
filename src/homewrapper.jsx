import { useMediaQuery } from "react-responsive";
import { Home } from "./home";        
import { HomeMobile } from "./homemobile"; 

export const HomeWrapper = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 }); 

  return (
    <>
      {isMobile ? <HomeMobile /> : <Home />}
    </>
  );
};
