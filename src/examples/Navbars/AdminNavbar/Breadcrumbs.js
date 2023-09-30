import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Breadcrumbs({ icon, route, light, header }) {
  const routes = route.slice(0, -1);

  return (
    <MKBox mr={{ xs: 0, xl: 8 }}>
      <MuiBreadcrumbs
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
          },
        }}
      >
        <Link to="/">
          <MKTypography
            component="span"
            variant="body2"
            color={light ? "white" : "dark"}
            opacity={light ? 0.8 : 0.5}
            sx={{ lineHeight: 0 }}
          >
            <Icon>{icon}</Icon>
          </MKTypography>
        </Link>
        {routes.map((el) => {
          if(el !== "admin") return <></>;
          return(
          <Link to={`/${el}`} key={el}>
            <MKTypography
              component="span"
              variant="button"
              fontWeight="regular"
              textTransform="capitalize"
              color={light ? "white" : "dark"}
              opacity={light ? 0.8 : 0.5}
              sx={{ lineHeight: 0 }}
            >
              {el}
            </MKTypography>
          </Link>
        )})}
      </MuiBreadcrumbs>
      <MKTypography
        fontWeight="bold"
        textTransform="capitalize"
        variant="h6"
        color={light ? "white" : "info"}
        noWrap
      >
        {header}
      </MKTypography>
    </MKBox>
  );
}

Breadcrumbs.defaultProps = {
  light: false,
  header: ""
};

Breadcrumbs.propTypes = {
  icon: PropTypes.node.isRequired,
  route: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  light: PropTypes.bool,
  header: PropTypes.string
};

export default Breadcrumbs;
