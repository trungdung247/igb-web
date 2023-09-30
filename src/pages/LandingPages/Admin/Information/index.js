import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminContainer from "../AdminContainer";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import MKBox from "components/MKBox";
import i18n from "locales/i18n";
import DataTable from "examples/Tables/DataTable";
import informationTableData from "pages/LandingPages/Admin/Information/data/informationTableData";
import { Card, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import AdminFooter from "examples/Footers/AdminFooter";
import { getListInformationAdminAction } from "stores/modules/admin";
import LoadingData from "components/LoadingData";

function Information() {
    const dispatch = useDispatch();
    const {loadingInformationAdmin} = useSelector(state => state.admin);
    const { columns: pColumns, rows: pRows } = informationTableData();

    useEffect(() => {
        dispatch(getListInformationAdminAction());
    }, []);

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar header={i18n.t('thong_tin_chung')} />
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
                                {i18n.t('danh_sach_thong_tin')}
                            </MKTypography>
                        </MKBox>
                        <MKBox pt={3}>
                            {!loadingInformationAdmin || loadingInformationAdmin == "loading" ? (
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

export default Information;
