import AdminLayout from "examples/LayoutContainers/AdminLayout";
import AdminContainer from "../AdminContainer";
import AdminNavbar from "examples/Navbars/AdminNavbar";
import MKBox from "components/MKBox";
import i18n from "locales/i18n";
import DataTable from "examples/Tables/DataTable";
import usersTableData from "pages/LandingPages/Admin/Users/data/usersTableData";
import { Card, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import AdminFooter from "examples/Footers/AdminFooter";

function Users() {
    const { columns, rows } = usersTableData();

    return (
        <AdminContainer>
            <AdminLayout>
                <AdminNavbar />
                <Grid item xs={12} mt={20}>
                    <Card>
                        <MKBox
                            mx={2}
                            mt={-3}
                            py={3}
                            px={2}
                            variant="gradient"
                            bgColor="secondary"
                            borderRadius="lg"
                            coloredShadow="secondary"
                        >
                            <MKTypography variant="h6" color="white">
                                {i18n.t('quan_tri_vien')}
                            </MKTypography>
                        </MKBox>
                        <MKBox pt={3}>
                            <DataTable
                                table={{ columns, rows }}
                                isSorted={false}
                                entriesPerPage={false}
                                showTotalEntries={false}
                                noEndBorder
                            />
                        </MKBox>
                    </Card>
                </Grid>
                <AdminFooter />
            </AdminLayout>
        </AdminContainer>
  );
}

export default Users;
