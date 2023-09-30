import PropTypes from "prop-types";
import CountUp from "react-countup";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant={description ? "h1" : "h2"} color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant={description ? "h5" : "h6"} mt={2} color={color}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="body2" color="dark" mt={1}>
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
}

DefaultCounterCard.defaultProps = {
  color: "secondary",
  description: "",
  title: "",
};

DefaultCounterCard.propTypes = {
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
  count: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
