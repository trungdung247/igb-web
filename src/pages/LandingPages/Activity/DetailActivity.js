import { useEffect, useMemo } from "react";
import Card from "@mui/material/Card";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import {useRoutesController} from "routes";
import {useFooterRoutesController} from "footer.routes";
import Contact from "pages/Presentation/sections/Contact";
import Header from "pages/LandingPages/Activity/sections/Header";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetailActivityAction } from "stores/modules/presentation";
import LoadingData from "components/LoadingData";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { parseHtml } from "utils/format";

function DetailActivity() {
  const dispatch = useDispatch();
  const {loadingDetailActivity, detailActivity} = useSelector(state => state.presentation);
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  const {id} = useParams();
  const { routes } = useRoutesController();  
  const { footerRoutes } = useFooterRoutesController();

  const itemSelected = useMemo(() => {
    let data = null;
    if(detailActivity){
      const dataCheck = detailActivity?.translation.find(i => i?.lang == currentLang);
      data = {
        id: detailActivity?.id,
        image: detailActivity?.image,
        name: dataCheck?.title,
        description: dataCheck?.sapo,
        detail: dataCheck?.detail
      };
    }
    return data;
  }, [detailActivity, currentLang]);

  useEffect(() => {
    dispatch(getDetailActivityAction({id}));
  }, [id]);
  
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <Header data={itemSelected} image={itemSelected?.image} showButton={false} />
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
            {!loadingDetailActivity || loadingDetailActivity == "loading" ? (
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

export default DetailActivity;
