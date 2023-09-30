import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Team from "pages/LandingPages/DevelopmentTeam/sections/Team";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Contact from "pages/Presentation/sections/Contact";
import Header from "pages/LandingPages/DevelopmentTeam/sections/Header";

function DevelopmentTeam() {
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
        <Team />
        <Contact />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default DevelopmentTeam;
