import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Capacity = ({ title, fontWeight }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    <MKTypography 
      display="block" 
      variant="string" 
      fontWeight={fontWeight || "regular"}
      lineHeight={1.5}
      sx={{
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3
      }}
    >
      {title || i18n.t('chua_cap_nhat')}
    </MKTypography>
  </MKBox>
);

Capacity.propTypes = {
  title: PropTypes.string,
  fontWeight: PropTypes.string
};

export default function data() {
  const listCapacityAdmin = useSelector(state => state.admin?.listCapacityAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listCapacityAdmin?.length){
      for(var i = 0; i < listCapacityAdmin?.length; i++){
        datas.push({
          title: <Capacity title={listCapacityAdmin[i]?.title_vi} fontWeight={"medium"} />,
          detail: <Capacity title={listCapacityAdmin[i]?.detail_vi} />,
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/capacity/${listCapacityAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listCapacityAdmin]);

  return {
    columns: [
      { Header: i18n.t('nang_luc'), accessor: "title", width: "40%", align: "left" },
      { Header: i18n.t('mo_ta_ngan'), accessor: "detail", width: "50%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
