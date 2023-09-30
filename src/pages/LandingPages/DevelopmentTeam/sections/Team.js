import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TeamCard from "examples/Cards/TeamCard";
import i18n from "locales/i18n";
import colors from "assets/theme/base/colors";
import { useInfoSetting, useTeamPresen } from "pages/Presentation/sections/hook";
import Divider from "@mui/material/Divider";

function Team() {
  const { resultInfos } = useInfoSetting();
  const { resultTeam, resultTeamManager } = useTeamPresen();
  const content = resultInfos.find(item => item?.key == "gioi_thieu_nhan_su_1")?.content || "";
  const {mobileView} = useSelector(state => state.main);
  const sizeTitle = mobileView ? 'h3' : 'h2';

  if(!resultTeam?.length && !resultTeamManager?.length) return <></>;
  return (
    <Container sx={{mt: 4}}>
      <Grid container>
        <Grid item xs={12}>
          <MKTypography variant={mobileView ? "h4" : "h3"} color="dark">
            {i18n.t('gioi_thieu')}
          </MKTypography>
          <MKTypography variant="body2" color="dark" my={2}>
            {content}
          </MKTypography>
        </Grid>
      </Grid>
      <MKBox
        component="section"
        variant="gradient"
        bgColor="light"
        position="relative"
        pb={6}
        pt={4}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        my={4}
        borderRadius="lg"
      >
        <Container>
          <MKTypography 
            variant={sizeTitle} 
            mb={6} 
            sx={{
              textAlign: "center", 
              color: colors.dark['main']
            }}
          >
            {i18n.t('ban_lanh_dao')}
          </MKTypography>
          <Grid container spacing={3}>
            {resultTeamManager.map(({image, name, position, socials}, key) => (
              <Grid item xs={12} lg={6} key={key}>
                <MKBox mb={1}>
                  <TeamCard
                    image={image}
                    name={name}
                    position={{ color: "info", label: position }}
                    socials={socials}
                  />
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>

      <Divider />
      
      <MKBox
        component="section"
        variant="gradient"
        bgColor="light"
        position="relative"
        pb={6}
        pt={4}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        my={4}
        sx={{borderRadius: 5}}
      >
        <Container>
          <MKTypography 
            variant={sizeTitle} 
            mb={6} 
            sx={{
              textAlign: "center", 
              color: colors.dark['main']
            }}
          >
            {i18n.t('doi_ngu_phat_trien')}
          </MKTypography>
          <Grid container spacing={3}>
            {resultTeam.map((item, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <MKBox mb={1}>
                  <TeamCard
                    image={item.image}
                    name={item.name}
                    position={{ color: "info", label: item.position }}
                    socials={item?.socials}
                  />
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
    </Container>
  );
}

export default Team;
