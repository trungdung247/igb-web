import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TeamCard from "examples/Cards/TeamCard";
import i18n from "locales/i18n";
import { useInfoSetting, useTeamPresen } from "pages/Presentation/sections/hook";

function Team() {
  const { resultInfos } = useInfoSetting();
  const { resultTeamManager } = useTeamPresen();
  const content = resultInfos.find(item => item?.key == "gioi_thieu_nhan_su_2")?.content || "";
  
  if(!resultTeamManager?.length) return <></>;
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
      my={10}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              {i18n.t('doi_ngu_lanh_dao')}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {content}
            </MKTypography>
          </Grid>
        </Grid>
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
  );
}

export default Team;
