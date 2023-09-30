import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import colors from "assets/theme/base/colors";
import imgDefault from "assets/images/default.png";

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

function ExampleCard({ image, title, description, height, ...rest }) {
  const imageTemplate = (
    <MKBox
      borderRadius="xl"
      shadow="lg"
      height={height}
      sx={{
        border: 4,
        borderColor: '#fff',
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
      {...rest}
    >
      <MKBox
        component="img"
        src={image || imgDefault}
        alt={title}
        width="100%"
        height="100%"
        my="auto"
        borderRadius="xl"
        onError={onImageError}
      />
    </MKBox>
  );

  return (
    <MKBox position="relative">
      {imageTemplate}
      {title || description ? (
        <MKBox mt={1} ml={1} lineHeight={1}>
          {title && (
            <MKTypography 
              variant="h6" 
              fontWeight="bold"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                "&:hover": {
                  color: colors.main['main1'],
                },
                mb: 0.5
              }}
            >
              {title}
            </MKTypography>
          )}
          {description && (
            <MKTypography 
              variant="h6" 
              fontWeight="regular"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
                color: colors.grey[600],
                "&:hover": {
                  color: colors.main['main1'],
                },
              }}
            >
              {description}
            </MKTypography>
          )}
        </MKBox>
      ) : null}
    </MKBox>
  );
}

ExampleCard.defaultProps = {
  title: "",
  description: "",
  height: "12rem"
};

ExampleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.string,
};

export default ExampleCard;
