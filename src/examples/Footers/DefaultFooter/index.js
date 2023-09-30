import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import pxToRem from "assets/theme/functions/pxToRem";
import colors from "assets/theme/base/colors";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright, information } = content;
  const {main, dark} = colors;

  return (
    <MKBox component="footer" pt={2} mt={2}>
      <Container>
        <Grid container spacing={3} justifyContent={'space-between'}>
          <Grid item xs={12} md={3.5} sx={{ mb: 3, mr: 6 }}>
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="7rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
              {information?.length > 0 && (
                information.map(({title, detail}, key) => {
                  if(!title || !detail) return;
                  return(
                    <MKTypography key={key} variant="body2" color="text" mt={1}>
                      {title}{": "}{detail}
                    </MKTypography>
                  )
                })
              )}
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => {
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
                  {icon}
                </MKTypography>
              )})}
            </MKBox>
          </Grid>
          {menus.map(({ title, md = 3, items }) => (
            <Grid key={title} item xs={6} md={md} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
                sx={{
                  fontSize: pxToRem(16),
                  color: main['main2']
                }}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ title: titleC, route, href }) => (
                  <MKBox key={titleC} component="li" p={0} m={0} lineHeight={1.8}>
                    &#x2022;
                    {href ? (
                      <MKTypography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        sx={({ palette: { main }}) => ({
                          ml: 0.5,
                          fontSize: pxToRem(15),
      
                          "&:hover": {
                            color: main['main1'],
                          },
                        })}
                      >
                        {titleC}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        rel="noreferrer"
                        sx={({ palette: { main }}) => ({
                          ml: 0.5,
                          fontSize: pxToRem(15),
      
                          "&:hover": {
                            color: main['main1'],
                          },
                        })}
                      >
                        {titleC}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
      <MKTypography 
        display="flex" variant="button" justifyContent="center" 
        alignItems="center" width="100%" 
        p={1}
        sx={{
          backgroundColor: dark['main']
        }}
        color="white"
        fontWeight="regular"
      >
       {copyright}
      </MKTypography>
    </MKBox>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string])).isRequired,
};

export default DefaultFooter;
