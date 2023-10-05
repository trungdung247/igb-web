import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import flag_vi from "assets/images/languages/flag_vi.png";
import flag_en from "assets/images/languages/flag_en.png";
import Icon from "@mui/material/Icon";

export let global = {
    brandName: "IGB SOFTWARE",
    listLanguages: [
        { icon: { alt: "flag_vi", src: flag_vi }, value: "vi", name: "Tiếng việt", id: 0 },
        { icon: { alt: "flag_en", src: flag_en }, value: "en", name: "English", id: 1 },
    ],
    listSocials: [
        {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/igbsoftware",
        },
        {
            icon: <TwitterIcon />,
            link: "https://twitter.com/AppThiet",
        },
        {
            icon: <GitHubIcon />,
            link: "#",
        },
        {
            icon: <YouTubeIcon />,
            link: "#",
        },
    ],
    enumRating: [1, 2, 3, 4, 5],
    ratings: {
        0.5: [
            <Icon key={1}>star_half</Icon>,
            <Icon key={2}>star_outline</Icon>,
            <Icon key={3}>star_outline</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        1: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star_outline</Icon>,
            <Icon key={3}>star_outline</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        1.5: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star_half</Icon>,
            <Icon key={3}>star_outline</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        2: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star_outline</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        2.5: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star_half</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        3: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star</Icon>,
            <Icon key={4}>star_outline</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        3.5: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star</Icon>,
            <Icon key={4}>star_half</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        4: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star</Icon>,
            <Icon key={4}>star</Icon>,
            <Icon key={5}>star_outline</Icon>,
        ],
        4.5: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star</Icon>,
            <Icon key={4}>star</Icon>,
            <Icon key={5}>star_half</Icon>,
        ],
        5: [
            <Icon key={1}>star</Icon>,
            <Icon key={2}>star</Icon>,
            <Icon key={3}>star</Icon>,
            <Icon key={4}>star</Icon>,
            <Icon key={5}>star</Icon>,
        ],
    }
};
