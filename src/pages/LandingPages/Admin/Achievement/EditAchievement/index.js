import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { getDetailAchievementAdminAction, onEditAchievementAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import LoadingData from "components/LoadingData";
import UploadImage from "components/UploadImage";
import { useParams } from 'react-router-dom';
import { deleteAchievementAdminAction } from "stores/modules/admin";
import { useNavigate } from "react-router-dom";

function EditAchievement() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailAchievementAdmin, loadingDetailAchievementAdmin} = useSelector(state => state.admin);
    const [avatar, setAvatar] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailAchievementAdminAction({id}));
    }, []);

    useEffect(() => {
        if(!detailAchievementAdmin) return;
        setAvatar(detailAchievementAdmin?.image);
        setTitle(detailAchievementAdmin?.title);
        setLink(detailAchievementAdmin?.link);
    }, [detailAchievementAdmin]);

    const onEdit = () => {
        if(!title){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onEditAchievementAdminAction({
            id,
            title, 
            link,
            image: avatar
        }, onSuccess));
    }

    const onDelete = () => {
        dispatch(deleteAchievementAdminAction({id}, onSuccess));
    }
    
    const onSuccess = () => {
        navigate("/admin/achievement", {replace: true});
    }

    useEffect(() => {
        if(loadingDetailAchievementAdmin === "error"){
            onSuccess();
        }
    }, [loadingDetailAchievementAdmin]);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('chinh_sua_thanh_tuu')} />
                {!loadingDetailAchievementAdmin || loadingDetailAchievementAdmin === "loading" ? (
                    <LoadingData bgColor={"transparent"} />
                ) : (
                    <>
                    <Grid item xs={12} mt={6}>
                        <Grid container mb={6} justifyContent={'space-between'}>
                            <Grid item xs={12} md={4}>
                                <Card sx={{px: 2}}>
                                    <MKBox
                                        mt={-3}
                                        py={2}
                                        px={2}
                                        variant="gradient"
                                        bgColor="secondary"
                                        borderRadius="lg"
                                        coloredShadow="secondary"
                                    >
                                        <MKTypography variant="h6" color="white">
                                            {i18n.t('anh_dai_dien')}
                                        </MKTypography>
                                    </MKBox>
                                    <UploadImage image={avatar} setImage={setAvatar} />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={7.5}>
                                <Card sx={{px: 2, pb: 3}}>
                                    <MKBox
                                        mt={-3}
                                        py={2}
                                        px={2}
                                        variant="gradient"
                                        bgColor="secondary"
                                        borderRadius="lg"
                                        coloredShadow="secondary"
                                        mb={3}
                                    >
                                        <MKTypography variant="h6" color="white">
                                            {i18n.t('thong_tin_co_ban')}
                                        </MKTypography>
                                    </MKBox>
                                    <MKInput
                                        label={i18n.t('thanh_tuu_dat_duoc')}
                                        placeholder={i18n.t('nhap_tai_day') + "..."}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        sx={{mb: 4}}
                                        multiline
                                        rows={2}
                                        value={title}
                                        onChange={({ target: { value } }) => {
                                            setTitle(value);
                                        }}
                                    />
                                    <MKInput
                                        label={"Website"}
                                        placeholder={i18n.t('nhap_tai_day') + "..."}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        multiline
                                        rows={2}
                                        value={link}
                                        onChange={({ target: { value } }) => {
                                            setLink(value);
                                        }}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
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

export default EditAchievement;
