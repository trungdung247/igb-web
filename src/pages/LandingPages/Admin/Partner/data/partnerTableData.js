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

const Partner = ({ image, title }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKBox
      component="img"
      src={image || imgDefault}
      alt={title}
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
      {title}
    </MKTypography>
  </MKBox>
);

Partner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default function data() {
  const listPartnerAdmin = useSelector(state => state.admin?.listPartnerAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listPartnerAdmin?.length){
      for(var i = 0; i < listPartnerAdmin?.length; i++){
        datas.push({
          partner: <Partner image={listPartnerAdmin[i]?.image} title={listPartnerAdmin[i]?.title || i18n.t('chua_cap_nhat')} />,
          link: (
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
              {listPartnerAdmin[i]?.link || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/partner/${listPartnerAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listPartnerAdmin]);

  return {
    columns: [
      { Header: i18n.t('doi_tac'), accessor: "partner", width: "50%", align: "left" },
      { Header: "Website", accessor: "link", width: "30%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
