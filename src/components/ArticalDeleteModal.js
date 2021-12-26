import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function ArticalDeleteModal(props) {
  const { show, setShow, articalId } = props
  const { deleteArtical } = useContext(diabetesContext)
  return (
    <Modal size="sm" show={show} onHide={() => setShow(false)}>
      <Form onSubmit={() => deleteArtical(articalId)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this Artical ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="danger" type="submit" onClick={() => setShow(false)}>
            yes , delete
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ArticalDeleteModal
