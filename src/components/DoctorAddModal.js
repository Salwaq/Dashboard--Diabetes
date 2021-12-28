import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function DoctorAddModal(props) {
  const { show, setShow } = props
  const { addDoctor } = useContext(diabetesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={addDoctor}>
        <Modal.Header closeButton>
          <Modal.Title>Add Doctor</Modal.Title>
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
              last name
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="lastName" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              email
            </Form.Label>
            <Col md="8">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              avatar
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="avatar" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              password
            </Form.Label>
            <Col md="8">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Add DR
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default DoctorAddModal
