import { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {AppBar, Toolbar, IconButton, Icon, Menu, MenuItem} from "@mui/material";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/AdminNavbar/styles";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminStoreAction } from "stores/modules/admin";
import Breadcrumbs from "./Breadcrumbs";
import i18n from "locales/i18n";
import { onLoginAction } from "stores/modules/user";

function AdminNavbar({ absolute, light, isMini, header }) {
  const dispatch = useDispatch();
  const {miniSidenav} = useSelector(state => state.admin);
  const [dropdown, setDropdown] = useState(null);
  const route = useLocation().pathname.split("/").slice(1);

  const handleMiniSidenav = () => dispatch(updateAdminStoreAction({miniSidenav: !miniSidenav}));

  const iconsStyle = ({ palette: { dark, white }}) => ({
    color: () => {
      let colorValue = light ? white.main : dark.main;

      return colorValue;
    },
  });

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const onLogout = () => {
    closeDropdown();
    dispatch(onLoginAction());
  }

  return (
    <AppBar
      position={absolute ? "absolute" : "sticky"}
      color="inherit"
      sx={(theme) => navbar(theme, {absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MKBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs 
            icon="home" 
            route={route} 
            light={light} 
            header={header}
          />
        </MKBox>
        {isMini ? null : (
          <MKBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MKBox pr={2}>
              <MKInput disabled label={i18n.t('nhap_tim_kiem')} />
            </MKBox>
            <MKBox color={light ? "white" : "inherit"}>
              <IconButton sx={navbarIconButton} size="small" disableRipple onClick={openDropdown}>
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
              <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
                <MenuItem onClick={onLogout}>{i18n.t('dang_xuat')}</MenuItem>
              </Menu>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
            </MKBox>
          </MKBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

AdminNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
  header: ""
};

AdminNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
  header: PropTypes.string
};

export default AdminNavbar;
