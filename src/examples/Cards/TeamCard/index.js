import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import imgDefault from "assets/images/default.png";

// ------ Social Icon -------
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import pxToRem from "assets/theme/functions/pxToRem";
// --------------------------

const IconSocial = ({icon}) => {
  switch (icon) {
    case "linkedin":
      return <LinkedInIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "github":
      return <TwitterIcon />;
    case "twitter":
      return <GitHubIcon />;
  
    default:
      break;
  }
}

IconSocial.propTypes = {
  icon: PropTypes.string
};

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

function TeamCard({ image, name, position, socials }) {
  const {mobileView} = useSelector(state => state.main);
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              height={pxToRem(mobileView ? 240 : 180)}
              borderRadius="lg"
              shadow="lg"
              onError={onImageError}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            {socials?.length > 0 && (
              <MKBox display="flex" alignItems="center" mt={3}>
                {socials.map(({ icon, link }, key) => {
                  if(!link) {return(
                    <MKTypography
                      key={key}
                      variant="h4"
                      color="dark"
                      opacity={0.8}
                      mr={key === socials.length - 1 ? 0 : 2.5}
                    >
                      <IconSocial icon={icon} />
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
                    color="dark"
                    opacity={0.8}
                    mr={key === socials.length - 1 ? 0 : 2.5}
                    sx={({ palette: { main }}) => ({
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        color: main['main1'],
                      },
                    })}
                  >
                    <IconSocial icon={icon} />
                  </MKTypography>
                )})}
              </MKBox>
            )}
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  socials: PropTypes.array,
};

export default TeamCard;
