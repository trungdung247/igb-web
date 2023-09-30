import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import typography from "assets/theme/base/typography";
import { global } from "utils/global";

function AdminFooter({ company }) {
  const { name } = company;
  const { size } = typography;

  return (
    <MKBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      px={1.5}
      py={3}
    >
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}{", made with"}
        <MKBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </MKBox>
        by
        <MKTypography variant="button" fontWeight="medium">
          &nbsp;{name}&nbsp;
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

AdminFooter.defaultProps = {
  company: { name: global?.brandName },
};

AdminFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string)
};

export default AdminFooter;
