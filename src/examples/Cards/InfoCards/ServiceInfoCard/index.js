import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Link } from "react-router-dom";

function ServiceInfoCard({ color, icon, title, sapo, direction, small, route }) {
  return (
    <MKTypography 
      component={Link}
      to={route}
    >
      <MKBox 
        lineHeight={1} 
        p={direction === "center" ? 2 : 0} 
        textAlign={direction}
      >
        {typeof icon === "string" ? (
          <MKTypography
            display="block"
            variant={direction === "center" ? "h2" : "h3"}
            color={color}
            textGradient
          >
            {" "}
            <Icon>{icon}</Icon>{" "}
          </MKTypography>
        ) : (
          icon
        )}
        <MKTypography
          display="block"
          variant="5"
          fontWeight="bold"
          mt={direction === "center" ? 1 : 2}
          mb={1.5}
          sx={({ palette: { main } }) => ({
            "&:hover": {
              color: main["main1"]
            },
          })}
        >
          {title}
        </MKTypography>
        <MKTypography
          display="block"
          variant={small ? "button" : "body2"}
          color="dark"
          pr={direction === "left" ? 6 : 0}
          pl={direction === "right" ? 6 : 0}
          sx={({ palette: { grey } }) => ({
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            "&:hover": {
              color: grey[600]
            },
          })}
        >
          {sapo}
        </MKTypography>
      </MKBox>
    </MKTypography>
  );
}

ServiceInfoCard.defaultProps = {
  color: "info",
  direction: "left",
  small: false,
  route: ""
};

ServiceInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  sapo: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
  route: PropTypes.string
};

export default ServiceInfoCard;
