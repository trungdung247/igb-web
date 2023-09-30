import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import bgImage from "assets/images/bg-contact-us.jpeg";
import i18n from "locales/i18n";
import Divider from "@mui/material/Divider";
import { useInfoSetting } from "pages/Presentation/sections/hook";

function ContactUs() {
  const { routes } = useRoutesController(); 
  const { footerRoutes } = useFooterRoutesController(); 
  const { resultInfos } = useInfoSetting();
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_lien_he_2");

  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky={true}
      />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox 
            component="img" src={bgImage} alt={'contact-us'} ml={2} 
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 8rem)"
            height="calc(100vh)"
            borderRadius="20px"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={1}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {i18n.t('lien_he')}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                {dataDetail?.content}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={i18n.t('ho_va_ten')}
                      value={""}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="phone"
                      variant="standard"
                      label={i18n.t('so_dien_thoai')}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={i18n.t('ten_cong_ty_cua_ban')}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={i18n.t('loi_nhan_den_chung_toi')}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {i18n.t('gui_yeu_cau')}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default ContactUs;
