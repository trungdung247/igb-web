import { useMemo } from "react";
import { useSelector } from "react-redux";

export const resultProject = () => {
  const listProjects = useSelector(state => state.project?.listProjects) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
  
  const datas = useMemo(() => {
    let datas = [];
    if(listProjects?.length){
      listProjects.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(!dataCheck) return;
        datas.push({
          id: item?.id,
          image: item?.image,
          title: dataCheck?.title,
          description: dataCheck?.sapo,
          detail: dataCheck?.detail,
          route: item?.href || ""
        });
      });
    }
    return datas;
  }, [listProjects, currentLang]);


  return {
    datas
  };
}
