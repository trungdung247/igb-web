import { useMemo } from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from "react-router-dom";

export default function data() {
  const listOutstandingsAdmin = useSelector(state => state.admin?.listOutstandingsAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listOutstandingsAdmin?.length){
      for(var i = 0; i < listOutstandingsAdmin?.length; i++){
        datas.push({
          title: (
            <MKTypography display="block" variant="string" fontWeight="medium" ml={1.5} lineHeight={1.5}>
              {"(" + listOutstandingsAdmin[i]?.count + listOutstandingsAdmin[i]?.suffix + ") "}{listOutstandingsAdmin[i]?.title_vi || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          description: (
            <MKTypography variant="string" color="text" fontWeight="regular">
              {listOutstandingsAdmin[i]?.description_vi || i18n.t('chua_cap_nhat')}
            </MKTypography>
          ),
          presen: (
            <MKTypography variant="h5" color={listOutstandingsAdmin[i]?.presen ? "info" : "dark"}>
              <CheckCircleIcon />
            </MKTypography>
          ),
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/outstanding-index/${listOutstandingsAdmin[i]?._id}`} color="dark">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listOutstandingsAdmin]);

  return {
    columns: [
      { Header: i18n.t('tieu_de') + " (VI)", accessor: "title", width: "30%", align: "left" },
      { Header: i18n.t('mo_ta') + " (VI)", accessor: "description", width: "50%", align: "left" },
      { Header: i18n.t('noi_bat'), accessor: "presen", align: "center" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
