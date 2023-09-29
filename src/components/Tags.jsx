import Badge from "react-bootstrap/Badge";

const Tags = ({ btnColor, btnTxt }) => {
  return (
    <>
      <h3>
        <Badge bg={btnColor}>{btnTxt}</Badge>
      </h3>
    </>
  );
};
export default Tags;
