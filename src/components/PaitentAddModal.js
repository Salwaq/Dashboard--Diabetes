import { useContext } from "react"
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function PaitentAddModal(props) {
  const { show, setShow } = props
  const { addPaitent, doctors } = useContext(diabetesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addPaitent}>
        <Modal.Header closeButton>
          <Modal.Title>Add Paitent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              first name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="firstName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              mid name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="midName" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              last name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Email
            </Form.Label>
            <Col md="6">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Password
            </Form.Label>
            <Col md="6">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              gendar
            </Form.Label>
            <Col md="8">
              <Form.Select type="text" name="gendar" required>
                <option value={"male"}>male</option>
                <option value={"female"}>female</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              insurance
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="insurance" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              phone number
            </Form.Label>
            <Col md="8">
              <Form.Control type="number" name="phoneNumber" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              smoking ?
            </Form.Label>
            <Col md="8">
              <Form.Select type="text" name="smoking" required>
                <option value={true}>YES</option>
                <option value={false}>NO</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Doctor
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {doctors.map(doctor => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="doctor" value={doctor._id} />
                  </Col>
                  <Col md="8">
                    <Image src={doctor.photo} roundedCircle height={50} width={50} style={{ objectFit: "cover" }} />
                    <span style={{ marginLeft: 10 }}>
                      {doctor.firstName} {doctor.lastName}
                    </span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add Paitent
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PaitentAddModal
