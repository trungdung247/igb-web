import PropTypes from "prop-types";
import MKBox from "components/MKBox";

function DataTableBodyCell({ noBorder, align, children }) {
  return (
    <MKBox
      component="td"
      textAlign={align}
      py={2}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <MKBox
        display="inline-block"
        // width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </MKBox>
    </MKBox>
  );
}

DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};

export default DataTableBodyCell;
