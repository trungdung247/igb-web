import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import ServiceInfoCard from "examples/Cards/InfoCards/ServiceInfoCard";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import i18n from "locales/i18n";
import { global } from "utils/global";
import { useServicePresen, useInfoSetting } from "./hook";

function Services() {
  const { resultServices } = useServicePresen();
  const { resultInfos } = useInfoSetting();
  const dataDetail1 = resultInfos.find(item => item?.key == "gioi_thieu_dich_vu_1");
  const dataDetail2 = resultInfos.find(item => item?.key == "gioi_thieu_dich_vu_2");

  if(!resultServices?.length) return <></>;
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={12} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          {dataDetail1?.content && dataDetail2?.content ? (
            <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgFront}
                  icon="touch_app"
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
                  title={i18n.t('dich_vu')}
                  description={dataDetail2?.content}
                  action={{
                    type: "internal",
                    route: "/services",
                    label: i18n.t('xem_tat_ca'),
                    color: "light"
                  }}
                />
              </RotatingCard>
            </Grid>
          ) : null}
          <Grid item xs={12} lg={(dataDetail1?.content && dataDetail2?.content) ? 7.5 : 12} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              {resultServices.map((i, index) => (
                <Grid key={index} item xs={12} md={6} sx={{ mt: { xs: 0, md: 4 } }}>
                  <ServiceInfoCard
                    icon={"description"}
                    title={i?.title}
                    sapo={i?.sapo}
                    route={i?.route}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Services;
