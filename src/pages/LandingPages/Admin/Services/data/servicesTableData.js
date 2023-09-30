import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from "react-redux";
import pxToRem from "assets/theme/functions/pxToRem";
import imgDefault from "assets/images/default.png";
import { Link } from "react-router-dom";

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

const Service = ({ image, name }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKBox
      component="img"
      src={image || imgDefault}
      alt={name}
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
      fontWeight="medium" ml={1.5} 
      lineHeight={1.5}
      sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3
      }}
    >
      {name}
    </MKTypography>
  </MKBox>
);

Service.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default function data() {
  const listServicesAdmin = useSelector(state => state.admin?.listServicesAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listServicesAdmin?.length){
      for(var i = 0; i < listServicesAdmin?.length; i++){
        datas.push({
          project: <Service image={listServicesAdmin[i]?.image} name={listServicesAdmin[i]?.title_vi || i18n.t('chua_cap_nhat')} />,
          sapo: (
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
              {listServicesAdmin[i]?.sapo_vi || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          presen: (
            <MKTypography variant="h5" color={listServicesAdmin[i]?.presen ? "info" : "dark"}>
              <CheckCircleIcon />
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/services/${listServicesAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listServicesAdmin]);

  return {
    columns: [
      { Header: i18n.t('du_an_thuc_hien'), accessor: "project", width: "42%", align: "left" },
      { Header: i18n.t('mo_ta_ngan'), accessor: "sapo", width: "38%", align: "left" },
      { Header: i18n.t('noi_bat'), accessor: "presen", align: "center" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
