import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import ServiceInfoCard from "examples/Cards/InfoCards/ServiceInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import i18n from "locales/i18n";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import bgDocument from "assets/images/bg-document.jpeg";
import { useServicePresen, useInfoSetting } from "pages/Presentation/sections/hook";

function Information() {
  const { resultServices } = useServicePresen();
  const { resultInfos } = useInfoSetting();
  const info1 = resultInfos.find(item => item?.key == "gioi_thieu_chi_tiet_2")?.content || "";
  const info2 = resultInfos.find(item => item?.key == "gioi_thieu_chi_tiet_3")?.content || "";

  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          sx={{ mx: "auto", px: 0.75, mb: 5, mt: -7 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={i18n.t('ve_chung_toi')}
            container
            sx={{ mb: 2 }}
            size={"xs"}
          />
          <MKTypography variant="h3" fontWeight="bold">
            {info1}
          </MKTypography>
          <MKTypography variant="body2" color="text" sx={{mt: 2}}>
            {info2}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={8}>
            <Grid container justifyContent="flex-start">
              {resultServices.map(({title, sapo, route}, key) => (
                <Grid key={key} item xs={12} md={6} sx={{ mt: { xs: 0, md: 4 } }}>
                  <ServiceInfoCard
                    icon={"description"}
                    title={title}
                    sapo={sapo}
                    route={route}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={bgDocument}
              title={i18n.t('ho_so_nang_luc')}
              description={i18n.t('thong_bao_ho_so_nang_luc')}
              action={{
                type: "internal",
                route: "pages/contact-us",
                color: "info",
                label: i18n.t('dang_ky'),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
