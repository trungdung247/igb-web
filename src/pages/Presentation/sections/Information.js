import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import ExampleCard from "pages/Presentation/components/ExampleCard";
import i18n from "locales/i18n";
import { useInfoPresen, useInfoSetting } from "./hook";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import { useSelector } from "react-redux";

function Information() {
  const { resultInfo } = useInfoPresen(); 
  const { resultInfos } = useInfoSetting(); 
  const {mobileView} = useSelector(state => state.main);
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_linh_vuc_1")?.content || "";
  const renderData = resultInfo.map(({ title, description, items, xs, md = "auto", height }, key) => {
    if(!items?.length) return <></>;
    return(
      <Grid key={key} container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} lg={3}>
          <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1} color="info">
              {title}
            </MKTypography>
            <MKTypography variant="body2" fontWeight="regular" color="dark" mb={1} pr={2}>
              {description}
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={3}>
            {items.map(({ image, title: titleC, description = "", route, link }, key) => {
              const ViewCard = () => (
                <ExampleCard 
                  image={image} 
                  title={titleC} 
                  height={height} 
                  description={description} 
                />
              )
              return(
              <Grid key={key} item xs={mobileView ? xs : 12} md={md} sx={{ mb: 2 }}>
                {route ? (
                  <Link to={route}>
                    <ViewCard />
                  </Link>
                ) : link ? (
                  <MuiLink 
                    href={link}
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <ViewCard />
                  </MuiLink>
                ) : (
                  <ViewCard />
                )}
              </Grid>
            )})}
          </Grid>
        </Grid>
      </Grid>
    )
  });

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 3, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={i18n.t('linh_vuc_hoat_dong')}
            container
            sx={{ mb: 1 }}
            size={"xs"}
          />
          <MKTypography variant="h3" fontWeight="bold">
            {i18n.t('giai_phap_hang_dau_tu_cac_chuyen_gia')}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {dataDetail}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default Information;
