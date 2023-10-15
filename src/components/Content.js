import {Card, Button, Container, Row, Col} from "react-bootstrap"

const Content = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} className="isicontent">
                    <Card style={{ width: '18rem' }} className="isicontent">
                <Card.Img variant="top" src="holder.js/100px180 "/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-left ">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="text-left">Go somewhere</Button>
                </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4} className="isicontent">
                    <Card style={{ width: '18rem' }} className="isicontent">
                <Card.Img variant="top" src="holder.js/100px180 "/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-left ">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="text-left">Go somewhere</Button>
                </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4} className="isicontent">
                    <Card style={{ width: '18rem' }} className="isicontent">
                <Card.Img variant="top" src="holder.js/100px180 "/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-left ">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="text-left">Go somewhere</Button>
                </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4} className="isicontent">
                    <Card style={{ width: '18rem' }} className="isicontent">
                <Card.Img variant="top" src="holder.js/100px180 "/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-left ">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" className="text-left">Go somewhere</Button>
                </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content