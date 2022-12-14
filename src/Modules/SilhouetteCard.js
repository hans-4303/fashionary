import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

function SilhouetteCard() {
  return (
    <Card className='card-indivi'>
      <Card.Img variant="top" src={require(`../Sources/Img/outline_girl2_40.jpg`)} />
      <Card.Body>
        <Card.Title>Silhouette</Card.Title>
        <Card.Text>
          체형에 맞춘 스타일링 방법을 알려드립니다.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>New Updated</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Link to={"/silhouette/1"} style={{textDecoration: "none", color: "coral"}}>확인해보기</Link>
      </Card.Body>
    </Card>
  );
}

export default SilhouetteCard;