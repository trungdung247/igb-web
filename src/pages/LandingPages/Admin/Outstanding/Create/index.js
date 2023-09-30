import { useState } from "react";
import { useDispatch } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid, Switch } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { createOutstandingAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateOutStanding() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [count, setCount] = useState("");
    const [suffix, setSuffix] = useState("");
    const [title_vi, setTitleVi] = useState("");
    const [title_en, setTitleEn] = useState("");
    const [description_vi, setDescriptionVi] = useState("");
    const [description_en, setDescriptionEn] = useState("");
    const [presen, setPresen] = useState(false);

    const handleSetPresen = () => setPresen(!presen);

    const onCreate = () => {
        if(!count || !title_vi || !title_en){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(createOutstandingAdminAction({
            count, suffix, presen, 
            title_vi, title_en, 
            description_vi, description_en
        }, onSuccess));
    }

    const onSuccess = () => {
        navigate("/admin/outstanding-index", {replace: true});
    }

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('them_thong_tin_moi')} />
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
                                    {i18n.t('thong_tin_co_ban')}
                                </MKTypography>
                            </MKBox>
                            <MKBox display="flex" px={2} mb={3} alignItems="center" ml={-1}>
                                <Switch checked={presen} onChange={handleSetPresen} />
                                <MKTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                    onClick={handleSetPresen}
                                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                                >
                                &nbsp;&nbsp;{i18n.t('noi_bat')}
                                </MKTypography>
                            </MKBox>
                            <Grid container mb={3} px={2} justifyContent={'space-between'}>
                                <MKTypography variant="h6" color="dark">
                                    {"Count: "}
                                </MKTypography>
                                <Grid item xs={12} md={6}>
                                    <MKInput
                                        placeholder={"VD: 70"}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={count}
                                        onChange={({ target: { value } }) => {
                                            setCount(value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container px={2} justifyContent={'space-between'}>
                                <MKTypography variant="h6" color="dark">
                                    {"Suffix: "}
                                </MKTypography>
                                <Grid item xs={12} md={6}>
                                    <MKInput
                                        placeholder={"VD: +/-"}
                                        InputLabelProps={{ shrink: true }}
                                        fullWidth
                                        value={suffix}
                                        onChange={({ target: { value } }) => {
                                            setSuffix(value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
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
                                    {i18n.t('thong_tin_chi_tiet')}
                                </MKTypography>
                            </MKBox>
                            <Grid mx={2}>
                                <MKInput
                                    label={i18n.t('tieu_de') + " (VI)"}
                                    placeholder={i18n.t('nhap_tai_day') + "..."}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    sx={{mb: 4}}
                                    value={title_vi}
                                    onChange={({ target: { value } }) => {
                                        setTitleVi(value);
                                    }}
                                />
                                <MKInput
                                    label={i18n.t('tieu_de') + " (EN)"}
                                    placeholder={i18n.t('nhap_tai_day') + "..."}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    sx={{mb: 4}}
                                    value={title_en}
                                    onChange={({ target: { value } }) => {
                                        setTitleEn(value);
                                    }}
                                />
                                <MKInput
                                    label={i18n.t('mo_ta') + " (VI)"}
                                    placeholder={i18n.t('nhap_tai_day') + "..."}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    sx={{mb: 4}}
                                    multiline
                                    rows={6}
                                    value={description_vi}
                                    onChange={({ target: { value } }) => {
                                        setDescriptionVi(value);
                                    }}
                                />
                                <MKInput
                                    label={i18n.t('mo_ta') + " (EN)"}
                                    placeholder={i18n.t('nhap_tai_day') + "..."}
                                    InputLabelProps={{ shrink: true }}
                                    fullWidth
                                    sx={{mb: 4}}
                                    multiline
                                    rows={6}
                                    value={description_en}
                                    onChange={({ target: { value } }) => {
                                        setDescriptionEn(value);
                                    }}
                                />
                            </Grid>
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
                            onClick={onSuccess}
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

export default CreateOutStanding;
