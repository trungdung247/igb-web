import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/shapes/waves-white.svg";
import i18n from "locales/i18n";
import { useInfoSetting } from "./hook";

function Contact() {
  const { resultInfos } = useInfoSetting();
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_lien_he_1");
  return (
    <MKBox component="section" py={{ xs: 0, sm: 4 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              {i18n.t('lien_he_nhan_tu_van_tu_chuyen_gia')}
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              {dataDetail?.content}
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="/contact-us"
              sx={{ mb: 2 }}
            >
              {i18n.t('toi_muon_nhan_tu_van_ngay')}
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Contact;
