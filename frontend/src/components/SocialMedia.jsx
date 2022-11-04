import Button from 'react-bootstrap/Button';
import noti from '../media/Notifications.jpg';
import '../css/SocialMedia.css'
import { Card } from 'react-bootstrap';

export const Social = () => {
  return (
    <div className='bg-sm'>
        <h1>Publicaciones</h1>
    <div className='sm'>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image" />
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image"/>
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image" />
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image" />
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image" />
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="tarjeta">
        <Card.Img variant="top" src={noti} className="image" />
        <Card.Body>
            <Card.Title>Publicaciones</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Mostar mas...</Button>
        </Card.Body>
        </Card>
    </div>  
    </div>
  );
}


