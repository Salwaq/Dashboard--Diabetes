import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function ArticalEditModal(props) {
  const { show, setShow, artical } = props
  const { editArtical } = useContext(diabetesContext)
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => editArtical(e, artical._id)}>
        <Modal.Header closeButton>
          <Modal.Title>edit Artical</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              title
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="title" defaultValue={artical.title} required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              description
            </Form.Label>
            <Col md="8">
              <Form.Control type="text" name="description" defaultValue={artical.description} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="url" name="image" defaultValue={artical.image} required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => setShow(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ArticalEditModal
