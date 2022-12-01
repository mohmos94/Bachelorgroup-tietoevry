import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardItem(props) {
    return (
        <div>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                       {props.text}
                    </Card.Text>
                    <Button variant="secondary">Github</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default CardItem;