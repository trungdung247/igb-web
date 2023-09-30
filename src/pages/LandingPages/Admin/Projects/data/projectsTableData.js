import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import dataTypeProjects from "pages/LandingPages/Projects/dataTypeProjects";
import pxToRem from "assets/theme/functions/pxToRem";
import imgDefault from "assets/images/default.png";
import { Link } from "react-router-dom";

const onImageError = (e) => {
  e.target.onerror = null;
  e.target.src = imgDefault;
}

const Project = ({ image, name }) => (
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

Project.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default function data() {
  const {
    listTypeProjects
  } = dataTypeProjects();
  const listProjectsAdmin = useSelector(state => state.admin?.listProjectsAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listProjectsAdmin?.length){
      for(var i = 0; i < listProjectsAdmin?.length; i++){
        const type = listTypeProjects.find(item => item?.value === listProjectsAdmin[i]?.type);
        datas.push({
          project: <Project image={listProjectsAdmin[i]?.image} name={listProjectsAdmin[i]?.title_vi || i18n.t('chua_cap_nhat')} />,
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
              {listProjectsAdmin[i]?.sapo_vi || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          type: (
            <MKTypography variant="caption" color="text" fontWeight="medium">
              {type?.label || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/projects/${listProjectsAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listProjectsAdmin]);

  return {
    columns: [
      { Header: i18n.t('du_an_thuc_hien'), accessor: "project", width: "42%", align: "left" },
      { Header: i18n.t('mo_ta_ngan'), accessor: "sapo", width: "38%", align: "left" },
      { Header: i18n.t('danh_muc'), accessor: "type", align: "center" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
