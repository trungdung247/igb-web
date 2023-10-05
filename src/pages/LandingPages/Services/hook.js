import { useMemo } from "react";
import { useSelector } from "react-redux";

export const resultService = () => {
  const listServices = useSelector(state => state.service?.listServices) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
  
  const datas = useMemo(() => {
    let datas = [];
    if(listServices?.length){
      listServices.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            route: `/services/${item?.id}`,
            image: item?.image,
            title: dataCheck?.title,
            description: dataCheck?.sapo,
            detail: dataCheck?.detail
          });
        }
      });
    }
    return datas;
  }, [listServices, currentLang]);


  return {
    datas
  };
}
