import { useState } from "react";
import { useDispatch } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import { Card, Grid } from "@mui/material";
import AdminFooter from "examples/Footers/AdminFooter";
import { onCreateProgramAdminAction } from "stores/modules/admin";
import AdminContainer from "../../AdminContainer";
import MKInput from "components/MKInput";
import i18n from "locales/i18n";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { toast } from "react-toastify";
import UploadImage from "components/UploadImage";
import { useNavigate } from "react-router-dom";

function CreateProgram() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const onCreate = () => {
        if(!title){
            toast.warn(i18n.t('cap_nhat_day_du_thong_tin'));
            return;
        }
        dispatch(onCreateProgramAdminAction({
            link,
            title,
            image: avatar
        }, onSuccess));
    }

    const onSuccess = () => {
        navigate("/admin/program", {replace: true});
    }

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('them_ngon_ngu_moi')} />
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
                                    <MKBox px={1}>
                                        <MKInput
                                            label={i18n.t('ten_ngon_ngu')}
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
                                    </MKBox>
                                </Card>
                            </Grid>
                        </Grid>
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

export default CreateProgram;
