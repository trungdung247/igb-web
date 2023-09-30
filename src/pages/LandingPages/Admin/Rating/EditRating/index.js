import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid, Menu, MenuItem, Icon } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { getDetailRatingAdminAction, onEditRatingAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import LoadingData from "components/LoadingData";
import { useParams } from 'react-router-dom';
import { deleteRatingAdminAction } from "stores/modules/admin";
import { useNavigate } from "react-router-dom";
import { global } from "utils/global";

function EditRating() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailRatingAdmin, loadingDetailRatingAdmin} = useSelector(state => state.admin);
    const enumRating = global?.enumRating;
    const [name_vi, setNameVi] = useState("");
    const [name_en, setNameEn] = useState("");
    const [review_vi, setReviewVi] = useState("");
    const [review_en, setReviewEn] = useState("");
    const [position, setPosition] = useState("");
    const [rating, setRating] = useState(enumRating[0]);
    const [dropdownCate, setDropdownCate] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailRatingAdminAction({id}));
    }, []);

    useEffect(() => {
        if(!detailRatingAdmin) return;
        setNameVi(detailRatingAdmin?.name_vi);
        setNameEn(detailRatingAdmin?.name_en);
        setReviewVi(detailRatingAdmin?.review_vi);
        setReviewEn(detailRatingAdmin?.review_en);
        setPosition(detailRatingAdmin?.position);
        setRating(detailRatingAdmin?.rating || enumRating[0]);
    }, [detailRatingAdmin]);

    const onEdit = () => {
        if(!name_vi || !name_en || !review_vi || !review_en || !rating){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onEditRatingAdminAction({
            id,
            name_vi, name_en,
            review_vi, review_en,
            position, rating
        }, onSuccess));
    }

    const onDelete = () => {
        dispatch(deleteRatingAdminAction({id}, onSuccess));
    }
    
    const onSuccess = () => {
        navigate("/admin/rating", {replace: true});
    }

    useEffect(() => {
        if(loadingDetailRatingAdmin === "error"){
            onSuccess();
        }
    }, [loadingDetailRatingAdmin]);

    const openDropdownCate = ({ currentTarget }) => setDropdownCate(currentTarget);
    const closeDropdownCate = () => setDropdownCate(null);

    const onSelectCate = (item) => {
        setRating(item);
        closeDropdownCate();
    }

    // Styles
    const iconStyles = {
        ml: 1,
        fontWeight: "bold",
        transition: "transform 200ms ease-in-out",
    };

    const dropdownIconStyles = {
        transform: dropdownCate ? "rotate(180deg)" : "rotate(0)",
        ...iconStyles,
    };

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar absolute header={i18n.t('chinh_sua_danh_gia')} />
                {!loadingDetailRatingAdmin || loadingDetailRatingAdmin === "loading" ? (
                    <LoadingData bgColor={"transparent"} />
                ) : (
                    <>
                    <Grid item xs={12} mt={10}>
                        <Card sx={{px: 2, my: 8}}>
                            <MKBox
                                mt={-3}
                                py={2}
                                px={2}
                                variant="gradient"
                                bgColor="secondary"
                                borderRadius="lg"
                                coloredShadow="secondary"
                                mb={5}
                            >
                                <MKTypography variant="h6" color="white">
                                    {i18n.t('thong_tin_co_ban')}
                                </MKTypography>
                            </MKBox>
                            <MKBox display="flex" mb={4} sx={{alignItems: "center", justifyContent: "space-between"}}>
                                <MKTypography variant="body2" color="dark">
                                    {i18n.t('so_sao_danh_gia')}
                                </MKTypography>
                                <MKButton variant="gradient" size="small" color="light" onClick={openDropdownCate}>
                                    {rating} <Icon sx={dropdownIconStyles}>expand_more</Icon>
                                </MKButton>
                            </MKBox>
                            <Menu anchorEl={dropdownCate} open={Boolean(dropdownCate)} onClose={closeDropdownCate}>
                                {enumRating.map((item, index) => (
                                    <MenuItem 
                                        key={index} 
                                        onClick={() => {onSelectCate(item)}}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <MKInput
                                label={i18n.t('khach_hang') + " (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={2}
                                value={name_vi}
                                onChange={({ target: { value } }) => {
                                    setNameVi(value);
                                }}
                            />
                            <MKInput
                                label={i18n.t('khach_hang') + " (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={2}
                                value={name_en}
                                onChange={({ target: { value } }) => {
                                    setNameEn(value);
                                }}
                            />
                            <MKInput
                                label={i18n.t('cong_viec')}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={2}
                                value={position}
                                onChange={({ target: { value } }) => {
                                    setPosition(value);
                                }}
                            />
                        </Card>
                        <Card sx={{px: 2, pb: 3}}>
                            <MKBox
                                mt={-3}
                                py={2}
                                px={2}
                                variant="gradient"
                                bgColor="secondary"
                                borderRadius="lg"
                                coloredShadow="secondary"
                                mb={4}
                            >
                                <MKTypography variant="h6" color="white">
                                    {i18n.t('noi_dung_danh_gia')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={"Tiếng Việt (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={6}
                                value={review_vi}
                                onChange={({ target: { value } }) => {
                                    setReviewVi(value);
                                }}
                            />
                            <MKInput
                                label={"Tiếng Anh (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={6}
                                value={review_en}
                                onChange={({ target: { value } }) => {
                                    setReviewEn(value);
                                }}
                            />
                        </Card>
                    </Grid>
                    <MKBox sx={{my: 4}} display="flex" justifyContent="center" alignItems="center">
                        <MKButton
                            variant="gradient"
                            color={"success"}
                            onClick={onEdit}
                            sx={{mr: 2}}
                        >
                            {i18n.t('cap_nhat')}
                        </MKButton>
                        <MKButton
                            variant="gradient"
                            color={"error"}
                            onClick={onDelete}
                        >
                            {i18n.t('xoa')}
                        </MKButton>
                    </MKBox>
                    </>
                )}
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default EditRating;
