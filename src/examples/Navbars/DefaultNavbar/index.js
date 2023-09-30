import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Container, Popper, Icon, Menu, MenuItem,
  Grow, Grid, Divider
} from "@mui/material";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";
import logoCompany from "assets/images/logo_default.png";
import logoCompanyLight from "assets/images/logo_light.png";
import { useDispatch, useSelector } from "react-redux";
import { changeLangAction } from "stores/modules/languages";
import { global } from "utils/global";
import { mobileNavAction } from "stores/modules/main";
import pxToRem from "assets/theme/functions/pxToRem";

const sizeIconLang = pxToRem(20);

function DefaultNavbar({ routes, transparent, light, action, sticky, relative, center }) {
  const dispatch = useDispatch();
  const {mobileView, mobileNavbar} = useSelector(state => state.main);
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
  const [dropdown, setDropdown] = useState("");
  const [dropdownLang, setDropdownLang] = useState(null);
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);

  const listLanguages = global?.listLanguages;
  const checkCurrentLang = listLanguages?.find(item => item?.value == currentLang);

  const openMobileNavbar = () => dispatch(mobileNavAction(!mobileNavbar));

  const openDropdownLang = ({ currentTarget }) => setDropdownLang(currentTarget);
  const closeDropdownLang = () => setDropdownLang(null);

  const onChangeLanguage = (index) => {
    const data = listLanguages?.[index];
    dispatch(changeLangAction(data?.value));
  }

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </MKTypography>
                    {col.collapse.map((item) => (
                      <MKTypography
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { main, light }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: main['main1'],
                            color: light['main']
                          },
                        })}
                      >
                        {item.name}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <MKTypography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 1.2}
            px={2}
            sx={({ palette: { main, light }, borders: { borderRadius } }) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",

              "&:hover": {
                backgroundColor: main['main1'],
                color: light['main'],

                "& *": {
                  color: light['main'],
                },
              },
            })}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {item.name}
                <MKTypography
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox borderRadius="lg">
            <MKTypography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <MKTypography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    variant="button"
                    textTransform="capitalize"
                    minWidth={item.description ? "14rem" : "12rem"}
                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}
                    py={item.description ? 1 : 0.625}
                    px={2}
                    sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: dark.main,

                        "& *": {
                          color: dark.main,
                        },
                      },
                    })}
                  >
                    {item.description ? (
                      <MKBox>
                        {item.name}
                        <MKTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={{ transition: "all 300ms linear" }}
                        >
                          {item.description}
                        </MKTypography>
                      </MKBox>
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </MKTypography>
                );
              });
          }

          return template;
        })
      : null
  );

  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKBox 
              component="img" 
              src={light ? logoCompanyLight : logoCompany} 
              alt={global?.brandName} 
              maxWidth="8rem" 
            />
          </MKBox>
          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox display="flex" justifyContent="space-between" alignItems="center">
            <MKBox 
              component="img" 
              src={checkCurrentLang.icon?.src} 
              alt={checkCurrentLang.icon?.alt} 
              width={sizeIconLang} 
              height={sizeIconLang} 
              sx={{ cursor: "pointer", mx: 2 }}
              onClick={openDropdownLang}
            />
            <Menu anchorEl={dropdownLang} open={Boolean(dropdownLang)} onClose={closeDropdownLang}>
              {listLanguages.map(({ id, name, icon }, key) => (
                <MenuItem 
                  key={key} 
                  onClick={() => {onChangeLanguage(id)}}
                >
                  <MKBox 
                    component="img" 
                    src={icon?.src} 
                    alt={icon?.alt} 
                    width={sizeIconLang} 
                    height={sizeIconLang} 
                  />
                  &nbsp;&nbsp;{name}
                </MenuItem>
              ))}
            </Menu>
            <MKBox
              display={{ xs: "inline-block", lg: "none" }}
              lineHeight={0}
              py={1.5}
              pl={0.5}
              color={transparent ? "white" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={openMobileNavbar}
            >
              <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
            </MKBox>
          </MKBox>

          {!mobileView && (
            <MKBox ml={{ xs: "auto", lg: 0 }}>
              {action &&
                (action.type === "internal" ? (
                  <MKButton
                    component={Link}
                    to={action.route}
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ) : (
                  <MKButton
                    component="a"
                    href={action.route}
                    target="_blank"
                    rel="noreferrer"
                    variant={
                      action.color === "white" || action.color === "default"
                        ? "contained"
                        : "gradient"
                    }
                    color={action.color ? action.color : "info"}
                    size="small"
                  >
                    {action.label}
                  </MKButton>
                ))}
            </MKBox>
          )}
        </MKBox>
        <MKBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
        "button"
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
