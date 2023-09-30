import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import { global } from "utils/global";

function ReviewCards({ color, image, name, position, review, rating }) {
  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      <MKBox display="flex" alignItems="center">
        <MKAvatar
          src={image}
          alt={name}
          size="lg"
          shadow="md"
          sx={{ mr: 1.5 }}
          bgColor="secondary"
        />
        <MKBox lineHeight={1}>
          <MKTypography
            display="block"
            variant={image ? "button" : "h6"}
            fontWeight="bold"
            color={color === "transparent" || color === "light" ? "dark" : "white"}
            mb={0.5}
          >
            {name}
          </MKTypography>
          {position ? (
            <MKTypography
              variant={image ? "caption" : "button"}
              fontWeight="regular"
              lineHeight={1}
              color={color === "transparent" || color === "light" ? "text" : "white"}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Icon>work</Icon>&nbsp;
              {position}
            </MKTypography>
          ) : (<></>)}
        </MKBox>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </MKTypography>
      <MKTypography
        variant="h4"
        color={"info"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {global.ratings[rating]}
      </MKTypography>
    </MKBox>
  );
}

ReviewCards.defaultProps = {
  color: "transparent",
  image: "",
};

ReviewCards.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  review: PropTypes.string.isRequired,
  rating: PropTypes.oneOf(global.enumRating).isRequired,
};

export default ReviewCards;
