import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import i18n from "locales/i18n";
import { useInfoSetting, useProjectPresen } from "./hook";
import MKButton from "components/MKButton";

function Projects() {
  const { resultProjects } = useProjectPresen(); 
  const { resultInfos } = useInfoSetting();
  const dataDetail1 = resultInfos.find(item => item?.key == "gioi_thieu_du_an_1")?.content || "";
  const dataDetail2 = resultInfos.find(item => item?.key == "gioi_thieu_du_an_2")?.content || "";

  const renderData = resultProjects.map(({ image, title, route, description }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={title}>
      <Link to={route}>
        <ExampleCard image={image} title={title} description={description} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={1} mb={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={i18n.t('gioi_thieu')}
            container
            sx={{ mb: 1 }}
            size={"xs"}
          />
          <MKTypography variant="h3" fontWeight="bold">
            {i18n.t('du_an_tieu_bieu')}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {dataDetail1}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 6 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                {i18n.t('du_an_thuc_hien')}
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="dark" mb={1} pr={2}>
                {dataDetail2}
              </MKTypography>
              <MKButton
                component={Link}
                to={"/projects"}
                variant={"gradient"}
                color={"info"}
                size="small"
                my={2}
              >
                {i18n.t("xem_tat_ca")}
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;
