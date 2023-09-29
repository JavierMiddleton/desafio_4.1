import Card from "react-bootstrap/Card";
import Btn from "./Tags";
import Tags from "./Tags";

function MyCard({ image, title, description, btnColor, btnTxt }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags btnColor={btnColor} btnTxt={btnTxt} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;
