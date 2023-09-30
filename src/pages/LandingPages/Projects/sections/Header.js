import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MuiLink from "@mui/material/Link";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";
import MKBadge from "components/MKBadge";
import { useInfoSetting } from "pages/Presentation/sections/hook";

function Header({data, image, showButton}) {
  const { resultInfos } = useInfoSetting();
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_du_an_1")?.content || "";
  return (
    <MKBox
      minHeight="70vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          alignItems={"flex-start"}
          sx={{ mx: "auto" }}
        >
          {!showButton && (
            <MKBadge
              variant="contained"
              color="info"
              badgeContent={i18n.t('gioi_thieu_du_an')}
              container
              sx={{ mb: 2 }}
              size={'xs'}
            />
          )}
          <MKTypography
            variant="h2"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {data?.name  || i18n.t('du_an_thuc_hien')}
          </MKTypography>
          <MKTypography variant="h5" color="white" fontWeight="regular" opacity={0.8} mt={1} mb={3}>
            {data?.description || dataDetail}
          </MKTypography>
          {showButton && (
            <MKButton
              component={MuiLink}
              href={"/contact-us"}
              variant="gradient"
              color={"info"}
              sx={{minHeight: '3rem', fontSize: '0.8rem'}}
            >
              {i18n.t('ho_so_nang_luc')}
            </MKButton>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

Header.defaultProps = {
  data: null,
  image: "",
  showButton: true
};

Header.propTypes = {
  data: PropTypes.object,
  image: PropTypes.string,
  showButton: PropTypes.bool
};

export default Header;
