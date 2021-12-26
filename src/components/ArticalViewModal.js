import { Button, ListGroup, Modal } from "react-bootstrap"

function ArticalViewModal(props) {
  const { show, setShow, artical } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View DR</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>title</strong> {artical.title}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>photo:</strong>{" "}
            <img src={artical.image} style={{ objectFit: "contain", height: "200px", width: "100%" }} />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>description</strong> {artical.description}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>auther:</strong>
            <ListGroup>{artical.auther}</ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ArticalViewModal
