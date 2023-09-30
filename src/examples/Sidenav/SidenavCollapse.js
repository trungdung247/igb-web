import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";
import { useSelector } from "react-redux";

function SidenavCollapse({ icon, name, active, ...rest }) {
  const {miniSidenav} = useSelector(state => state.admin);

  return (
    <ListItem component="li">
      <MKBox
        {...rest}
        sx={(theme) =>
          collapseItem(theme, {
            active
          })
        }
      >
        <ListItemIcon
          sx={(theme) =>
            collapseIconBox(theme)
          }
        >
          {typeof icon === "string" ? (
            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
          ) : (
            icon
          )}
        </ListItemIcon>

        <ListItemText
          primary={name}
          sx={(theme) =>
            collapseText(theme, {
              miniSidenav,
              active
            })
          }
        />
      </MKBox>
    </ListItem>
  );
}

SidenavCollapse.defaultProps = {
  active: false
};

SidenavCollapse.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default SidenavCollapse;
