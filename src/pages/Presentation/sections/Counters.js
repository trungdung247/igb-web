import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import { useCounterPresen } from "./hook";

function Counters(){
  const { resultCounterPresen } = useCounterPresen(); 
  console.log("AAAAAA:: ", resultCounterPresen)
  if(!resultCounterPresen?.length) return <></>;
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={11} sx={{ mx: "auto" }}>
          {resultCounterPresen?.map((i, index) => {
            const ViewCount = () => (
              <DefaultCounterCard
                count={i?.count}
                suffix={i?.suffix || ""}
                title={i?.title}
                description={i?.description}
              />
            );

            if(index > 0 && index < resultCounterPresen?.length - 1){
              return(
                <Grid key={index} item xs={12} md={4} display="flex">
                  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
                  <ViewCount />
                  <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
                </Grid>
              )
            }

            return(
              <Grid key={index} item xs={12} md={4}>
                <ViewCount />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
