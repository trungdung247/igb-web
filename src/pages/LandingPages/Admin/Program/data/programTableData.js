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

const Program = ({ image, title }) => (
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

Program.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default function data() {
  const listProgramAdmin = useSelector(state => state.admin?.listProgramAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listProgramAdmin?.length){
      for(var i = 0; i < listProgramAdmin?.length; i++){
        datas.push({
          program: <Program image={listProgramAdmin[i]?.image} title={listProgramAdmin[i]?.title || i18n.t('chua_cap_nhat')} />,
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
              {listProgramAdmin[i]?.link || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/program/${listProgramAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listProgramAdmin]);

  return {
    columns: [
      { Header: i18n.t('ngon_ngu_phat_trien'), accessor: "program", width: "50%", align: "left" },
      { Header: "Website", accessor: "link", width: "30%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
