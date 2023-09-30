import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import CapacityInfoCard from "examples/Cards/InfoCards/CapacityInfoCard";
import i18n from "locales/i18n";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useCapacityPresen, useInfoSetting } from "./hook";

function Capacity({position}) {
  const { resultCapacity } = useCapacityPresen();
  const { resultInfos } = useInfoSetting();
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_nang_luc_1")?.content || "";

  if(!resultCapacity?.length) return <></>;
  return (
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={position === "center" ? 8 : 0}
        flexDirection="column"
        alignItems={position === "center" ? "center" : "flex-start"}
        sx={{ textAlign: position === "center" ? "center" : "left", my: 6, mx: "auto", px: 0.75 }}
      >
        <MKBadge
          variant="contained"
          color="info"
          badgeContent={i18n.t('nang_luc')}
          container
          sx={{ mb: 1 }}
          size={"xs"}
        />
        <MKTypography variant={"h3"} fontWeight="bold">
          {i18n.t('vi_sao_chon_chung_toi')}
        </MKTypography>
        <MKTypography variant={position === "center" ? "body1" : "body2"} color="text">
          {dataDetail}
        </MKTypography>
      </Grid>
      <Grid container spacing={3}>
        {resultCapacity.map(({ title, detail }, key) => (
          <Grid key={key} item xs={12} lg={4}>
            <CapacityInfoCard
              color="info"
              icon={<AutoAwesomeIcon />}
              title={title}
              description={detail}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Capacity.defaultProps = {
  position: "center"
};

Capacity.propTypes = {
  position: PropTypes.string
};

export default Capacity;
