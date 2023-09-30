import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import { useInfoSocial } from "pages/Presentation/sections/hook";

function FolowUS() {
  const { listSocials } = useInfoSocial();
  return (
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={12}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center", backgroundColor: colors.grey[200] }}
          py={3}
          borderRadius={4}
          mb={2}
        >
          <MKTypography variant="h6" color="dark">
            {i18n.t('theo_doi_chung_toi')}
          </MKTypography>
          <MKBox display="flex" justifyContent="center" alignItems="center">
            <MKBox display="flex" alignItems="center" mt={3}>
              {listSocials.map(({ icon, link }, key) => {
                if(!link) {return(
                  <MKTypography
                    key={key}
                    rel="noreferrer"
                    variant="h3"
                    color="dark"
                    opacity={0.8}
                    mr={key === listSocials.length - 1 ? 0 : 4}
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
                  variant="h3"
                  color="dark"
                  opacity={0.8}
                  mr={key === listSocials.length - 1 ? 0 : 4}
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
        </Grid>
      </Container>
  );
}

export default FolowUS;
