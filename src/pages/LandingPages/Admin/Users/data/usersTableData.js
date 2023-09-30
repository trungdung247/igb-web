import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAvatar from "components/MKAvatar";
import MKBadge from "components/MKBadge";
import team1 from "assets/images/team-1.jpeg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MKBox display="flex" alignItems="center" lineHeight={1}>
      <MKAvatar src={image} name={name} size="sm" />
      <MKBox ml={2} lineHeight={1}>
        <MKTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MKTypography>
        <MKTypography variant="caption">{email}</MKTypography>
      </MKBox>
    </MKBox>
  );

  const Job = ({ title, description }) => (
    <MKBox lineHeight={1} textAlign="left">
      <MKTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MKTypography>
      <MKTypography variant="caption">{description}</MKTypography>
    </MKBox>
  );

  Author.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
  };

  Job.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  };

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team1} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
      {
        author: <Author image={team1} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
      {
        author: <Author image={team1} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
      {
        author: <Author image={team1} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
      {
        author: <Author image={team1} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
      {
        author: <Author image={team1} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MKBox ml={-1}>
            <MKBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MKBox>
        ),
        employed: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MKTypography>
        ),
        action: (
          <MKTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MKTypography>
        ),
      },
    ],
  };
}
