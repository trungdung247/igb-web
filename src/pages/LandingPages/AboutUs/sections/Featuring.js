import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import colors from "assets/theme/base/colors";
import pxToRem from "assets/theme/functions/pxToRem";
import MKBadge from "components/MKBadge";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import i18n from "locales/i18n";
import { useCounterPresen } from "pages/Presentation/sections/hook";
import { useSelector } from "react-redux";

function Featuring() {
  const { grey, main } = colors;
  const { resultCounters } = useCounterPresen();
  const listPartner = useSelector(state => state.presentation?.listPartner) || [];

  return (
    <MKBox component="section" pt={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          flexDirection="column"
          sx={{ mx: "auto", px: 0.75, mb: 5, mt: -7 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={i18n.t('thanh_tuu')}
            container
            sx={{ mb: 2 }}
            size={"xs"}
          />
          <MKTypography variant="h3" fontWeight="bold">
            {"IGB Software được các Đối Tác Chiến Lược Tin Tưởng Giao Phó"}
          </MKTypography>
          <Grid container justifyContent="center" sx={{ textAlign: "center", mt: 3 }}>
            {listPartner?.length > 0 && (
              listPartner.map(({image, title}, key) => {
                return(
                  <Grid 
                    item md={1.5} key={key} 
                    border={1} borderColor={grey['300']} 
                    sx={{m: 1, p: 1}} 
                    borderRadius={'10px'}
                    height={pxToRem(80)}
                  >
                    <MKBox
                      component="img"
                      src={image}
                      alt={title}
                      width="100%"
                      height="100%"
                      position="relative"
                    />
                  </Grid>
                )
              })
            )}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {resultCounters?.length > 0 && (
            resultCounters.map(({count, suffix, title}, index) => {
              return(
                <Grid item md={"auto"} key={index} sx={{backgroundColor: main['main3'], m: 0.8}} borderRadius={'10px'}>
                  <DefaultCounterCard
                    count={count}
                    suffix={suffix}
                    separator=","
                    title={title || ""}
                    color={"light"}
                  />
                </Grid>
              )
            })
          )}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Featuring;
