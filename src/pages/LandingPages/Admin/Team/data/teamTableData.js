import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import pxToRem from "assets/theme/functions/pxToRem";
import imgDefault from "assets/images/default.png";
import { Link } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

const Team = ({ image, title }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKBox
      component="img"
      src={image || imgDefault}
      alt={title}
      width={pxToRem(74)}
      height={pxToRem(74)}
      my="auto"
      borderRadius="lg"
      coloredShadow={"light"}
      onError={onImageError}
    />
    <MKTypography 
      display="block" 
      variant="string" 
      fontWeight="medium" 
      ml={2} 
      lineHeight={1.5}
      sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3
      }}
    >
      {title}
    </MKTypography>
  </MKBox>
);

Team.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default function data() {
  const listTeamAdmin = useSelector(state => state.admin?.listTeamAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listTeamAdmin?.length){
      for(var i = 0; i < listTeamAdmin?.length; i++){
        datas.push({
          team: <Team image={listTeamAdmin[i]?.image} title={listTeamAdmin[i]?.name || i18n.t('chua_cap_nhat')} />,
          position: (
            <MKTypography 
              variant="string" 
              color="text" 
              fontWeight="regular"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3
              }}
            >
              {listTeamAdmin[i]?.position || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          manager: (
            <MKTypography variant="h5" color={listTeamAdmin[i]?.manager ? "info" : "dark"}>
              <CheckCircleIcon />
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/team/${listTeamAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listTeamAdmin]);

  return {
    columns: [
      { Header: i18n.t('nhan_su'), accessor: "team", width: "42%", align: "left" },
      { Header: i18n.t('chuc_vu'), accessor: "position", width: "30%", align: "left" },
      { Header: i18n.t('ban_lanh_dao'), accessor: "manager", align: "center" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
