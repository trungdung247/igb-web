import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Capacity from "pages/Presentation/sections/Capacity";
import Mission from "pages/LandingPages/AboutUs/sections/Mission";
import Header from "pages/LandingPages/AboutUs/sections/Header";
import OpinionRating from "pages/Presentation/sections/OpinionRating";

function AboutUs() {
  const { routes } = useRoutesController(); 
  const { footerRoutes } = useFooterRoutesController(); 

  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Mission />
        <Featuring />
        <Capacity position={"left"} />
        <Team />
        <OpinionRating />
        <Newsletter />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default AboutUs;
