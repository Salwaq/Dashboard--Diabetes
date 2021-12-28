import { useContext } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import diabetesContext from "../utils/diabetesContext"

function DoctorDeleteModal(props) {
  const { show, setShow, doctorId } = props
  const { deleteDoctor } = useContext(diabetesContext)
  return (
    <Modal size="sm" show={show} onHide={e => setShow(false)}>
      <Form onSubmit={() => deleteDoctor(doctorId)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this doctor ?</Modal.Body>
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

export default DoctorDeleteModal
