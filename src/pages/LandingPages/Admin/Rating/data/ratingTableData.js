import { useMemo } from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import i18n from "locales/i18n";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MKAvatar from "components/MKAvatar";

const Rating = ({ name, image, fontWeight }) => (
  <MKBox display="flex" alignItems="center" lineHeight={1}>
    {image ? (
      <MKAvatar
        src={image}
        alt={name}
        variant="rounded"
        size="sm"
        shadow="md"
        bgColor="secondary"
        sx={{mr: 1.5}}
      />
    ) : null}
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
      {name || i18n.t('chua_cap_nhat')}
    </MKTypography>
  </MKBox>
);

Rating.propTypes = {
  name: PropTypes.string,
  fontWeight: PropTypes.string,
  image: PropTypes.string
};

export default function data() {
  const listRatingAdmin = useSelector(state => state.admin?.listRatingAdmin) || [];

  const rows = useMemo(() => {
    let datas = [];
    if(listRatingAdmin?.length){
      for(var i = 0; i < listRatingAdmin?.length; i++){
        datas.push({
          name: <Rating name={listRatingAdmin[i]?.name_vi} image={listRatingAdmin[i]?.name_vi} fontWeight={"medium"} />,
          review: <Rating name={listRatingAdmin[i]?.review_vi} />,
          action: (
            <MKBox display="flex" alignItems="center" lineHeight={1}>
              <MKTypography variant="h4" component={Link} to={`/admin/rating/${listRatingAdmin[i]?._id}`} color="success">
                <EditNoteIcon />
              </MKTypography>
            </MKBox>
          ),
        })
      }
    }
    return datas;
  }, [listRatingAdmin]);

  return {
    columns: [
      { Header: i18n.t('khach_hang'), accessor: "name", width: "40%", align: "left" },
      { Header: i18n.t('noi_dung_danh_gia'), accessor: "review", width: "50%", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows
  };
}
