import { Col , Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
            <Col>
                <div className='title'>Cari dan temukan</div>
                <div className='title'>Inspirasi kreatif mu</div>
                <input type="text" name="search" placeholder="Search..." />
                <div className='title2'>Pencarian terpopuler</div>
                <div className='introButton mt-4 d-flex justify-content-between text-center align-items-center border'>
                  <Button>Mobile Design</Button>
                  <Button>Logo</Button>
                  <Button>App Desain</Button>
                  <Button>Sosial Media Desain</Button>
                  <Button>Website Desain</Button>
                </div>
            </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro