import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminContainer from "../AdminContainer";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import MKBox from "components/MKBox";
import i18n from "locales/i18n";
import DataTable from "examples/Tables/DataTable";
import achievementTableData from "pages/LandingPages/Admin/Achievement/data/achievementTableData";
import { Card, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import AdminFooter from "examples/Footers/AdminFooter";
import { getListAchievementAdminAction } from "stores/modules/admin";
import LoadingData from "components/LoadingData";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";

function Achievement() {
    const dispatch = useDispatch();
    const {loadingAchievementAdmin} = useSelector(state => state.admin);
    const { columns: pColumns, rows: pRows } = achievementTableData();

    useEffect(() => {
        dispatch(getListAchievementAdminAction());
    }, []);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('thanh_tuu_dat_duoc')} />
                <Grid item xs={12} mt={6}>
                    <Card>
                        <MKBox
                            mx={2}
                            mt={-3}
                            py={2}
                            px={2}
                            variant="gradient"
                            bgColor="secondary"
                            borderRadius="lg"
                            coloredShadow="secondary"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <MKTypography variant="h6" color="white">
                                {i18n.t('danh_sach_thanh_tuu')}
                            </MKTypography>
                            <MKButton
                                variant="gradient"
                                color={"dark"}
                                component={Link}
                                to={'/admin/achievement/new'}
                                rel="noreferrer"
                                size="small"
                                sx={{justifyContent: "flex-end"}}
                            >
                                {i18n.t('them_moi')}
                            </MKButton>
                        </MKBox>
                        <MKBox pt={3}>
                            {!loadingAchievementAdmin || loadingAchievementAdmin == "loading" ? (
                                <LoadingData />
                            ) : (
                                <DataTable
                                    table={{ columns: pColumns, rows: pRows }}
                                    isSorted={false}
                                    entriesPerPage={true}
                                    showTotalEntries={true}
                                    noEndBorder={true}
                                />
                            )}
                        </MKBox>
                    </Card>
                </Grid>
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default Achievement;
