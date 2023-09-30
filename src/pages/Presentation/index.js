import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Counters from "pages/Presentation/sections/Counters";
import Services from "pages/Presentation/sections/Services";
import Information from "pages/Presentation/sections/Information";
import Projects from "pages/Presentation/sections/Projects";
import OpinionRating from "pages/Presentation/sections/OpinionRating";
import Contact from "pages/Presentation/sections/Contact";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import bgImage from "assets/images/bg-home.jpeg";
import i18n from "locales/i18n";
import Capacity from "pages/Presentation/sections/Capacity";
import { global } from "utils/global";
import { useInfoSetting } from "./sections/hook";

function Presentation() {
  const { routes } = useRoutesController();  
  const { footerRoutes } = useFooterRoutesController(); 
  const { resultInfos } = useInfoSetting(); 
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_trang_chu_1")?.content || "";

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/contact-us",
          label: i18n.t("dat_hen_tu_van"),
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {global?.brandName}{" "}
            </MKTypography>
            {dataDetail ? (
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                {dataDetail}
              </MKTypography>
            ) : null}
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Services />
        <Information />
        <Projects />
        <Capacity />
        <OpinionRating />
        <Contact />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Presentation;
