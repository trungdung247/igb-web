import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import ReviewCards from "examples/Cards/ReviewCards";
import MKBadge from "components/MKBadge";
import i18n from "locales/i18n";
import MKTypography from "components/MKTypography";
import { useInfoSetting, useRatingPresen } from "./hook";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

function OpinionRating() {
  const { resultInfos } = useInfoSetting();
  const { resultRating } = useRatingPresen();
  const dataDetail = resultInfos.find(item => item?.key == "gioi_thieu_danh_gia_1")?.content || "";

  if(!resultRating?.length) return <></>;
  return (
    <MKBox component="section" pt={6} pb={4}>
      <Container>
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
          >
            <MKBadge
              variant="contained"
              color="info"
              badgeContent={i18n.t('y_kien_danh_gia')}
              container
              sx={{ mb: 1 }}
              size="xs"
            />
            <MKTypography variant="h3" fontWeight="bold">
              {i18n.t('danh_gia_cua_khach_hang')}
            </MKTypography>
            <MKTypography variant="body1" color="text">
              {dataDetail}
            </MKTypography>
          </Grid>
        </Container>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={10}
            slidesPerView={2}
            initialSlide={resultRating?.length > 2 ? 1 : 0}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            className="mySwiper"
          >
            {resultRating.map((item, index) => (
              <SwiperSlide key={index}>
                <Grid item xs={12} md={6} lg={12} mb={10}>
                  <ReviewCards
                    color="light"
                    name={item?.name}
                    review={item?.review}
                    rating={item?.rating}
                    position={item?.position}
                    image={item?.name}
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default OpinionRating;
