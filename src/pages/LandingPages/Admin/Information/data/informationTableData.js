import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Information = ({ title, fontWeight }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKTypography 
      display="block" 
      variant="string" 
      fontWeight={fontWeight || "normal"}
      lineHeight={1.5}
      sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2
      }}
    >
      {title || i18n.t('chua_cap_nhat')}
    </MKTypography>
  </MKBox>
);

Information.propTypes = {
  title: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default function data() {
  const listInformationAdmin = useSelector(state => state.admin?.listInformationAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listInformationAdmin?.length){
      for(var i = 0; i < listInformationAdmin?.length; i++){
        datas.push({
          type: <Information title={listInformationAdmin[i]?.type} fontWeight={"medium"} />,
          infoVi: <Information title={listInformationAdmin[i]?.content_vi} />,
          infoEn: <Information title={listInformationAdmin[i]?.content_en} />,
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/information/${listInformationAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listInformationAdmin]);

  return {
    columns: [
      { Header: i18n.t('tinh_nang'), accessor: "type", width: "20%", align: "left" },
      { Header: i18n.t('noi_dung') + " (VI)", accessor: "infoVi", width: "35%", align: "left" },
      { Header: i18n.t('noi_dung') + " (EN)", accessor: "infoEn", width: "35%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
