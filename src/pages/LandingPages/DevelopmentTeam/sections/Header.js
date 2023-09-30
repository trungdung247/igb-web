import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MuiLink from "@mui/material/Link";
import bgImage from "assets/images/bg-team.jpeg";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import { useInfoSocial, useInfoSetting } from "pages/Presentation/sections/hook";

function Header() {
  const { listSocials } = useInfoSocial();
  const { resultInfos } = useInfoSetting();
  const content = resultInfos.find(item => item?.key == "gioi_thieu_nhan_su_2")?.content || "";
  const {mobileView} = useSelector(state => state.main);

  return (
    <MKBox
      minHeight="75vh"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
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
          lg={9}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h2"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {i18n.t('doi_ngu_phat_trien')}
          </MKTypography>
          <MKTypography variant="h5" color="white" fontWeight="regular" opacity={0.8} mt={1} mb={3}>
            {content}
          </MKTypography>
          <MKButton
            component={MuiLink}
            href={"/contact-us"}
            variant="gradient"
            color={"info"}
          >
            {i18n.t('dat_hen_tu_van')}
          </MKButton>
          {!mobileView && (
            <>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              {i18n.t('theo_doi_chung_toi')}
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKBox display="flex" alignItems="center" mt={3}>
                {listSocials.map(({ icon, link }, key) => {
                  if(!link) {return(
                    <MKTypography
                      key={key}
                      variant="h4"
                      color="white"
                      opacity={0.8}
                      mr={key === listSocials.length - 1 ? 0 : 2.5}
                    >
                      {icon}
                    </MKTypography>
                  )}
                  return(
                  <MKTypography
                    key={link}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="h4"
                    color="white"
                    opacity={0.8}
                    mr={key === listSocials.length - 1 ? 0 : 2.5}
                    sx={({ palette: { main }}) => ({
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        color: main['main1'],
                      },
                    })}
                  >
                    {icon}
                  </MKTypography>
                )})}
              </MKBox>
            </MKBox>
            </>
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Header;
