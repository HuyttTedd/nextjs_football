import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function ContainerFluidExample() {
  return (
    <div>
        <Container>
        <Row>
            <Col class="bg-primary">1 of 2</Col>
            <Col class="bg-danger">2 of 2</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        </Container>
    </div>
  );
}

export default ContainerFluidExample;