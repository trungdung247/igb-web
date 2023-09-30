import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import Lottie from "lottie-react";
import animContact from "assets/animations/contact.json";
import i18n from "locales/i18n";
import { useInfoSetting } from "pages/Presentation/sections/hook";

function Newsletter() {
  const { resultInfos } = useInfoSetting();
  const content = resultInfos.find(item => item?.key == "gioi_thieu_lien_he_1")?.content || "";
  return (
    <MKBox component="section" my={6}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} sx={{ ml: { xs: 0, lg: 3 }, mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h4">{i18n.t('lien_he_nhan_tu_van_tu_chuyen_gia')}</MKTypography>
            <MKTypography variant="body2" color="text" mb={3}>
              {content}
            </MKTypography>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <MKInput 
                  type="email" 
                  label={"Email Here..."} 
                  fullWidth 
                />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  {i18n.t('gui_yeu_cau')}
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <Lottie 
                animationData={animContact}
                autoPlay
                loop
                duration={2000} 
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
