import { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminStoreAction } from "stores/modules/admin";
import i18n from "locales/i18n";
import { onLogoutAction } from "stores/modules/user";

function Sidenav({ color, logo, routes, ...rest }) {
  const dispatch = useDispatch();
  const {miniSidenav} = useSelector(state => state.admin);
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";

  const onSetMiniSidenav = (value) => {
    dispatch(updateAdminStoreAction({miniSidenav: value}))
  }
  const closeSidenav = () => onSetMiniSidenav(true);

  useEffect(() => {
    function handleMiniSidenav() {
      onSetMiniSidenav(window.innerWidth < 1200);
    }
    window.addEventListener("resize", handleMiniSidenav);
    handleMiniSidenav();
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [location]);

  const onLogout = () => {
    dispatch(onLogoutAction());
  }
  
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={collapseName.includes(key)}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={collapseName.includes(key)} />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <MKTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MKTypography>
      );
    } else if (type === "divider") {
      returnValue = (
        <Divider
          key={key}
          light={false}
        />
      );
    }

    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ miniSidenav }}
    >
      <MKBox pt={3} pb={1} px={4} textAlign="center">
        <MKBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MKTypography variant="h6" color="info">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MKTypography>
        </MKBox>
        <MKBox component={NavLink} to="/" display="flex" alignItems="center">
          {logo && <MKBox component="img" src={logo} alt="Brand" width="9rem" />}
        </MKBox>
      </MKBox>
      <Divider
        light={true}
      />
      <List>{renderRoutes}</List>
      <MKBox p={2} mt="auto">
        <MKButton
          variant="gradient"
          color={color}
          fullWidth
          onClick={onLogout}
        >
          {i18n.t('dang_xuat')}
        </MKButton>
      </MKBox>
    </SidenavRoot>
  );
}

Sidenav.defaultProps = {
  color: "dark",
  logo: "",
};

Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "light"]),
  logo: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
