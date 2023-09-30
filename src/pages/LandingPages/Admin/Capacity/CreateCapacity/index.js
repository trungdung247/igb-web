import { useState } from "react";
import { useDispatch } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { onCreateCapacityAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateCapacity() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title_vi, setTitleVi] = useState("");
    const [title_en, setTitleEn] = useState("");
    const [detail_vi, setDetailVi] = useState("");
    const [detail_en, setDetailEn] = useState("");

    const onCreate = () => {
        if(!title_vi || !title_en || !detail_vi || !detail_en){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onCreateCapacityAdminAction({
            title_vi, title_en,
            detail_vi, detail_en
        }, onSuccess));
    }

    const onSuccess = () => {
        navigate("/admin/capacity", {replace: true});
    }

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar absolute header={i18n.t('them_nang_luc_moi')} />
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
                                    {i18n.t('nang_luc_hoat_dong')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={"Tiếng Việt (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={2}
                                value={title_vi}
                                onChange={({ target: { value } }) => {
                                    setTitleVi(value);
                                }}
                            />
                            <MKInput
                                label={"Tiếng Anh (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={2}
                                value={title_en}
                                onChange={({ target: { value } }) => {
                                    setTitleEn(value);
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
                                mb={2}
                            >
                                <MKTypography variant="h6" color="white">
                                    {i18n.t('noi_dung_chi_tiet')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={"Tiếng Việt (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={10}
                                value={detail_vi}
                                onChange={({ target: { value } }) => {
                                    setDetailVi(value);
                                }}
                            />
                            <MKInput
                                label={"Tiếng Anh (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={10}
                                value={detail_en}
                                onChange={({ target: { value } }) => {
                                    setDetailEn(value);
                                }}
                            />
                        </Card>
                    </Grid>
                    <MKBox sx={{my: 4}} display="flex" justifyContent="center" alignItems="center">
                        <MKButton
                            variant="gradient"
                            color={"success"}
                            onClick={onCreate}
                            sx={{mr: 2}}
                        >
                            {i18n.t('cap_nhat')}
                        </MKButton>
                        <MKButton
                            variant="gradient"
                            color={"error"}
                            onClick={onCreate}
                        >
                            {i18n.t('huy_bo')}
                        </MKButton>
                    </MKBox>
                </>
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default CreateCapacity;
