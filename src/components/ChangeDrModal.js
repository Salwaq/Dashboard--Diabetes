import { useContext } from "react"
import { Button, Form, Col, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function ChangeDrModal(props) {
  const { show, setShow, paitentId, paitent } = props
  const { changeDoctor, doctors } = useContext(diabetesContext)
  return (
    <Modal size="sm" show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => changeDoctor(e, paitentId)}>
        <Modal.Header closeButton>
          <Modal.Title>Change DR: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label>Pleace Select the new Doctor</Form.Label>
            <Col md="8" style={{ maxHeight: 200, overflowY: "scroll", border: "1px solid darkgray" }}>
              {doctors.map(doctor => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Form.Check
                    type="radio"
                    name="doctor"
                    defaultChecked={paitent.doctor?._id == doctor?._id}
                    value={doctor._id}
                  />

                  <span style={{ marginLeft: 10 }}>
                    {doctor.firstName} {doctor.lastName}
                  </span>
                </Row>
              ))}
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ChangeDrModal
