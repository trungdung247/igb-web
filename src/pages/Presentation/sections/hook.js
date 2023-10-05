import { useEffect, useMemo } from "react";
import i18n from "locales/i18n";
import { useSelector, useDispatch } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { 
  getListOutstandingAction, getListCapacityAction, getListRatingAction,
  getListTeamAction, getListActivityAction, getListPartnerAction,
  getListProgramAction, getListAchievementAction
} from "stores/modules/presentation";

export const useInfoSetting = () => {
  const listInformations = useSelector(state => state.main?.listInformations) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
    
  const resultInfos = useMemo(() => {
    let datas = [];
    if(listInformations?.length){
      listInformations.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            key: item?.key,
            content: dataCheck?.content
          });
        }
      });
    }
    return datas;
  }, [listInformations, currentLang]);
  
  return {
    resultInfos
  };
}

export const useInfoSocial = () => {
  const { resultInfos } = useInfoSetting();
  const linkFb = resultInfos.find(item => item?.key == "link_fb")?.content || "#";
  const linkTwitter = resultInfos.find(item => item?.key == "link_twitter")?.content || "#";
  const linkGithub = resultInfos.find(item => item?.key == "link_github")?.content || "#";
  const linkYoutube = resultInfos.find(item => item?.key == "link_youtube")?.content || "#";

  const listSocials = useMemo(() => {
    let datas = [];
    if(!resultInfos?.length) return datas;
    datas = [{
      icon: <FacebookIcon />,
      link: linkFb,
    },
    {
      icon: <TwitterIcon />,
      link: linkTwitter,
    },
    {
      icon: <GitHubIcon />,
      link: linkGithub,
    },
    {
      icon: <YouTubeIcon />,
      link: linkYoutube,
    }];

    return datas;
  }, [resultInfos]);

  return {
    listSocials
  };
}

export const useCounterPresen = () => {
  const dispatch = useDispatch();
  const listOutstandings = useSelector(state => state.presentation?.listOutstandings) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  useEffect(() => {
    dispatch(getListOutstandingAction());
  }, []);
    
  const resultCounters = useMemo(() => {
    let datas = [];
    if(listOutstandings?.length){
      listOutstandings.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            count: item?.count,
            suffix: item?.suffix,
            title: dataCheck?.title,
            description: dataCheck?.description
          })
        }
      });
    }
    return datas;
  }, [listOutstandings, currentLang]);

  const resultCounterPresen = useMemo(() => {
    let datas = [];
    if(listOutstandings?.length){
      listOutstandings.map((item) => {
        if(!item?.presen) return;
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            count: item?.count,
            suffix: item?.suffix,
            title: dataCheck?.title,
            description: dataCheck?.description
          })
        }
      });
    }
    return datas;
  }, [listOutstandings, currentLang]);
  
  return {
    resultCounters,
    resultCounterPresen
  };
}

export const useServicePresen = () => {
  const listServices = useSelector(state => state.main?.listServices) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
    
  const resultServices = useMemo(() => {
    let datas = [];
    if(listServices?.length){
      listServices.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            title: dataCheck?.title,
            sapo: dataCheck?.sapo,
            detail: dataCheck?.detail,
            route: `/services/${item?.id}`
          })
        }
      });
    }
    return datas;
  }, [listServices, currentLang]);
  
  return {
    resultServices
  };
}

export const useProjectPresen = () => {
  const listProjects = useSelector(state => state.main?.listProjects) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";
  
  const resultProjects = useMemo(() => {
    let datas = [];
    if(listProjects?.length){
      listProjects.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            image: item?.image,
            route: `/projects/${item?.id}`,
            title: dataCheck?.title,
            description: dataCheck?.sapo,
            detail: dataCheck?.detail
          })
        }
      });
    }
    return datas;
  }, [listProjects, currentLang]);

  return {
    resultProjects
  };
}

export const useActivityPresen = () => {
  const dispatch = useDispatch();
  const listActivity = useSelector(state => state.presentation?.listActivity) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  useEffect(() => {
    if(listActivity?.length) return;
    dispatch(getListActivityAction());
  }, [listActivity]);

  const resultActivity = useMemo(() => {
    let datas = [];
    if(listActivity?.length){
      listActivity.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            image: item?.image,
            route: `/activity/${item?.id}`,
            title: dataCheck?.title,
            description: dataCheck?.sapo
          })
        }
      });
    }
    return datas;
  }, [listActivity, currentLang]);

  return {
    resultActivity
  };
}

export const usePartnerPresen = () => {
  const dispatch = useDispatch();
  const listPartner = useSelector(state => state.presentation?.listPartner) || [];

  useEffect(() => {
    if(listPartner?.length) return;
    dispatch(getListPartnerAction());
  }, [listPartner]);

  const resultPartner = useMemo(() => {
    let datas = [];
    if(listPartner?.length){
      datas = [...listPartner];
    }
    return datas;
  }, [listPartner]);

  return {
    resultPartner
  };
}

export const useProgramPresen = () => {
  const dispatch = useDispatch();
  const listProgram = useSelector(state => state.presentation?.listProgram) || [];

  useEffect(() => {
    if(listProgram?.length) return;
    dispatch(getListProgramAction());
  }, [listProgram]);

  const resultProgram = useMemo(() => {
    let datas = [];
    if(listProgram?.length){
      datas = [...listProgram];
    }
    return datas;
  }, [listProgram]);

  return {
    resultProgram
  };
}

export const useAchievementPresen = () => {
  const dispatch = useDispatch();
  const listAchievement = useSelector(state => state.presentation?.listAchievement) || [];

  useEffect(() => {
    if(listAchievement?.length) return;
    dispatch(getListAchievementAction());
  }, [listAchievement]);

  const resultAchievement = useMemo(() => {
    let datas = [];
    if(listAchievement?.length){
      datas = [...listAchievement];
    }
    return datas;
  }, [listAchievement]);

  return {
    resultAchievement
  };
}

export const useInfoPresen = () => {
  const { resultActivity } = useActivityPresen();
  const { resultPartner } = usePartnerPresen();
  const { resultProgram } = useProgramPresen();
  const { resultAchievement } = useAchievementPresen();

  const resultInfo = useMemo(() => {
    return [
      {
        title: i18n.t('linh_vuc'),
        description: i18n.t('linh_vuc_hoat_dong_cua_chung_toi'),
        md: 4,
        xs: 12,
        height: "13rem",
        items: resultActivity
      },
      {
        title: i18n.t('doi_tac_chien_luoc'),
        description: i18n.t('gioi_thieu_doi_tac_chien_luoc'),
        md: 2.4,
        xs: 6,
        height: "6rem",
        items: resultPartner
      },
      {
        title: i18n.t('thanh_tuu'),
        description: i18n.t('gioi_thieu_thanh_tuu'),
        md: 2.4,
        xs: 4,
        height: "6rem",
        items: resultAchievement
      },
      {
        title: i18n.t('ngon_ngu_lap_trinh'),
        description: i18n.t('gioi_thieu_ngon_ngu_lap_trinh'),
        md: 2,
        xs: 4,
        height: "4rem",
        items: resultProgram
      }
    ];
  }, [resultActivity, resultPartner, resultProgram, resultAchievement]);

  return {
    resultInfo
  };
}

export const useCapacityPresen = () => {
  const dispatch = useDispatch();
  const listCapacity = useSelector(state => state.presentation?.listCapacity) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  useEffect(() => {
    if(listCapacity?.length) return;
    dispatch(getListCapacityAction());
  }, [listCapacity]);

  const resultCapacity = useMemo(() => {
    let datas = [];
    if(listCapacity?.length){
      listCapacity.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            title: dataCheck?.title,
            detail: dataCheck?.detail
          })
        }
      });
    }
    return datas;
  }, [listCapacity, currentLang]);

  return {
    resultCapacity
  };
}

export const useRatingPresen = () => {
  const dispatch = useDispatch();
  const listRating = useSelector(state => state.presentation?.listRating) || [];
  const currentLang = useSelector(state => state.languages?.currentLang) || "vi";

  useEffect(() => {
    if(listRating?.length) return;
    dispatch(getListRatingAction());
  }, [listRating]);

  const resultRating = useMemo(() => {
    let datas = [];
    if(listRating?.length){
      listRating.map((item) => {
        const dataCheck = item?.translation.find(i => i?.lang == currentLang);
        if(dataCheck){
          datas.push({
            id: item?.id,
            rating: item?.rating,
            position: item?.position,
            name: dataCheck?.name,
            review: dataCheck?.review
          })
        }
      });
    }
    return datas;
  }, [listRating, currentLang]);

  return {
    resultRating
  };
}

export const useTeamPresen = () => {
  const dispatch = useDispatch();
  const listTeam = useSelector(state => state.presentation?.listTeam) || [];

  useEffect(() => {
    if(listTeam?.length) return;
    dispatch(getListTeamAction());
  }, [listTeam]);

  const resultTeamManager = useMemo(() => {
    let datas = [];
    if(listTeam?.length){
      listTeam.map((item) => {
        if(item?.manager){
          datas.push(item);
        }
      });
    }
    return datas;
  }, [listTeam]);

  const resultTeam = useMemo(() => {
    let datas = [];
    if(listTeam?.length){
      listTeam.map((item) => {
        if(!item?.manager){
          datas.push(item);
        }
      });
    }
    return datas;
  }, [listTeam]);

  return {
    resultTeam,
    resultTeamManager
  };
}
