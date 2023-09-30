import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import typography from "assets/theme/base/typography";
import { global } from "utils/global";

function SimpleFooter({ company, light }) {
  const { name } = company;
  const { size } = typography;

  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          width="100%"
        >
          &copy; {new Date().getFullYear()}{", made with"}
          <MKBox fontSize={size.md} color={light ? "white" : "text"} mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          by
          <MKTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
            &nbsp;{name}&nbsp;
          </MKTypography>
        </MKBox>
      </MKBox>
    </Container>
  );
}

SimpleFooter.defaultProps = {
  company: { name: global?.brandName },
  light: false,
};

SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  light: PropTypes.bool,
};

export default SimpleFooter;
