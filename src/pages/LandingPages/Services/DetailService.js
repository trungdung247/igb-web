import { useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Contact from "pages/Presentation/sections/Contact";
import Header from "pages/LandingPages/Projects/sections/Header";
import { useParams } from 'react-router-dom';
import bgHeader from "assets/images/bg-service-1.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getDetailServiceAction } from "stores/modules/service";
import LoadingData from "components/LoadingData";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { parseHtml } from "utils/format";

function DetailService() {
  const dispatch = useDispatch();
  const {loadingDetailService, detailService} = useSelector(state => state.service);
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  const {id} = useParams();
  const {
    routes
  } = useRoutesController();  
  const {
    footerRoutes
  } = useFooterRoutesController();

  const itemSelected = useMemo(() => {
    let data = null;
    if(detailService){
      const dataCheck = detailService?.translation.find(i => i?.lang == currentLang);
      data = {
        id: detailService?.id,
        image: detailService?.image,
        name: dataCheck?.title,
        description: dataCheck?.sapo,
        detail: dataCheck?.detail
      };
    }
    return data;
  }, [detailService, currentLang]);

  useEffect(() => {
    dispatch(getDetailServiceAction({id}));
  }, [id]);
  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header data={itemSelected} image={itemSelected?.image || bgHeader} showButton={false} />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
          <MKBox sx={{px: 3}}>
            {!loadingDetailService || loadingDetailService == "loading" ? (
              <LoadingData />
            ) : (
              <MKTypography
                variant="body1"
              >
                {parseHtml(itemSelected?.detail)}
              </MKTypography>
            )}
          </MKBox>
        <Contact />
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default DetailService;
