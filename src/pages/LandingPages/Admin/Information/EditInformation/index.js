import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { getDetailInformationAdminAction, onEditInformationAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import LoadingData from "components/LoadingData";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditInformation() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {detailInformationAdmin, loadingDetailInformationAdmin} = useSelector(state => state.admin);
    const [content_vi, setContentVi] = useState("");
    const [content_en, setContentEn] = useState("");

    const {id} = useParams();

    useEffect(() => {
        dispatch(getDetailInformationAdminAction({id}));
    }, []);

    useEffect(() => {
        if(!detailInformationAdmin) return;
        setContentVi(detailInformationAdmin?.content_vi);
        setContentEn(detailInformationAdmin?.content_en);
    }, [detailInformationAdmin]);

    const onEdit = () => {
        if(!content_vi){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onEditInformationAdminAction({
            id,
            content_vi, 
            content_en
        }, onSuccess));
    }
    
    const onSuccess = () => {
        navigate("/admin/information", {replace: true});
    }

    useEffect(() => {
        if(loadingDetailInformationAdmin === "error"){
            onSuccess();
        }
    }, [loadingDetailInformationAdmin]);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('chinh_sua_thong_tin')} />
                {!loadingDetailInformationAdmin || loadingDetailInformationAdmin === "loading" ? (
                    <LoadingData bgColor={"transparent"} />
                ) : (
                    <>
                    <Grid item xs={12} mt={6}>
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
                                    {detailInformationAdmin?.type || i18n.t('thong_tin_co_ban')}
                                </MKTypography>
                            </MKBox>
                            <MKInput
                                label={i18n.t('noi_dung') + " (VI)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                sx={{mb: 4}}
                                multiline
                                rows={10}
                                value={content_vi}
                                onChange={({ target: { value } }) => {
                                    setContentVi(value);
                                }}
                            />
                            <MKInput
                                label={i18n.t('noi_dung') + " (EN)"}
                                placeholder={i18n.t('nhap_tai_day') + "..."}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                                multiline
                                rows={10}
                                value={content_en}
                                onChange={({ target: { value } }) => {
                                    setContentEn(value);
                                }}
                            />
                        </Card>
                    </Grid>
                    <MKBox sx={{my: 4}} display="flex" justifyContent="center" alignItems="center">
                        <MKButton
                            variant="gradient"
                            color={"success"}
                            onClick={onEdit}
                        >
                            {i18n.t('cap_nhat')}
                        </MKButton>
                    </MKBox>
                    </>
                )}
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default EditInformation;
