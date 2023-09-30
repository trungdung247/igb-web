import { useEffect } from "react";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Contact from "pages/Presentation/sections/Contact";
import Header from "pages/LandingPages/Services/sections/Header";
import { Grid } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import { resultService } from "./hook";
import { useDispatch, useSelector } from "react-redux";
import { getListServicesAction } from "stores/modules/service";
import LoadingData from "components/LoadingData";
import EmptyData from "components/EmptyData";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import i18n from "locales/i18n";
import MKBox from "components/MKBox";
import bgHeader from "assets/images/bg-service-1.jpeg";
import FolowUS from "./sections/FolowUS";
import YoutubeEmbed from "components/YoutubeEmbed";
import Divider from "@mui/material/Divider";
import { global } from "utils/global";
import { useInfoSetting } from "pages/Presentation/sections/hook";

const renderData = (({ image, title, route, description }) => (
  <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={title}>
    <Link to={route}>
      <ExampleCard 
        image={image} 
        title={title} 
        description={description} 
        display="grid" 
        minHeight="auto" 
      />
    </Link>
  </Grid>
));

function Services() {
  const dispatch = useDispatch();
  const {loadingGetListService} = useSelector(state => state.service);
  const { datas } = resultService(); 
  console.log("KKKKKK:: ", datas)
  const { routes } = useRoutesController();
  const { footerRoutes } = useFooterRoutesController();
  const { resultInfos } = useInfoSetting();
  const dataDetail1 = resultInfos.find(item => item?.key == "gioi_thieu_dich_vu_1");
  const dataDetail2 = resultInfos.find(item => item?.key == "gioi_thieu_lien_he_1");
  const dataDetail3 = resultInfos.find(item => item?.key == "id_youtube_video");

  useEffect(() => {
    dispatch(getListServicesAction());
  }, []);
  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header data={null} image={bgHeader} />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox mb={10}>
          <Grid container item xs={12} sx={{ mx: "auto", mt: 3 }}>
            <Grid item xs={12} lg={8} sx={{ ml: "auto" }}>
                <Grid item xs={12} lg={12} sx={{px: { xs: 0, lg: 2 } }}>
                  {!loadingGetListService || loadingGetListService == "loading" ? (
                    <LoadingData />
                  ) : (
                    <Grid container spacing={3}>
                      {datas?.length ? 
                        datas.map(renderData)
                      :
                        <EmptyData />  
                      }
                    </Grid>
                  )}
                </Grid>
            </Grid>
            <Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
              {dataDetail3?.content ? (
                <>
                <YoutubeEmbed embedId={dataDetail3?.content} height={200} />
                <Divider />
                </>
              ) : null}
              <MKBox position="sticky" top="30px">
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
                  color="dark"
                  title={
                    <>
                      {i18n.t('dich_vu_cua')}
                      <br />
                      {global?.brandName}
                    </>
                  }
                  description={dataDetail1?.content}
                />
                <RotatingCardBack
                  image={bgBack}
                  color="dark"
                  title={i18n.t('lien_he')}
                  description={dataDetail2?.content}
                  action={{
                    type: "external",
                    route: "/contact-us",
                    label: i18n.t('dat_hen_tu_van'),
                    color: "info"
                  }}
                />
              </RotatingCard>
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
        <FolowUS />
        <Contact />
        <Outlet />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Services;
