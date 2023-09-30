import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import i18n from "locales/i18n";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import imgIntro from "assets/images/img-intro-igb.jpeg";
import { useInfoSetting } from "pages/Presentation/sections/hook";

function Mission() {
  const { resultInfos } = useInfoSetting();
  const info1 = resultInfos.find(item => item?.key == "gioi_thieu_tam_nhin_1")?.content || "";
  const info2 = resultInfos.find(item => item?.key == "gioi_thieu_su_menh_1")?.content || "";
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
            badgeContent={i18n.t('su_menh_tam_nhin')}
            container
            sx={{ mb: 2 }}
            size={"xs"}
          />
          <MKTypography variant="h3" fontWeight="bold">
            {i18n.t('tam_nhin')}
          </MKTypography>
          <MKTypography variant="body2" color="text" sx={{my: 2}}>
            {info1}
          </MKTypography>
          <MKTypography variant="h3" fontWeight="bold">
            {i18n.t('su_menh')}
          </MKTypography>
          <MKTypography variant="body2" color="text" sx={{mt: 2}}>
            {info2}
          </MKTypography>
        </Grid>
        <MKBox
          component="img"
          src={imgIntro}
          alt={"intro"}
          borderRadius="lg"
          width="100%"
          position="relative"
        />
      </Container>
    </MKBox>
  );
}

export default Mission;
