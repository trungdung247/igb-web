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

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

const Activity = ({ image, name }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKBox
      component="img"
      src={image || imgDefault}
      alt={name}
      width={pxToRem(100)}
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
      {name}
    </MKTypography>
  </MKBox>
);

Activity.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default function data() {
  const listActivityAdmin = useSelector(state => state.admin?.listActivityAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listActivityAdmin?.length){
      for(var i = 0; i < listActivityAdmin?.length; i++){
        datas.push({
          activity: <Activity image={listActivityAdmin[i]?.image} name={listActivityAdmin[i]?.title_vi || i18n.t('chua_cap_nhat')} />,
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
              {listActivityAdmin[i]?.sapo_vi || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/activity/${listActivityAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listActivityAdmin]);

  return {
    columns: [
      { Header: i18n.t('linh_vuc'), accessor: "activity", width: "42%", align: "left" },
      { Header: i18n.t('mo_ta_ngan'), accessor: "sapo", width: "38%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
