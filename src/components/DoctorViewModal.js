import { Button, ListGroup, Modal } from "react-bootstrap"

function DoctorViewModal(props) {
  const { show, setShow, doctor } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View DR</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name</strong> {doctor.firstName} {doctor.lastName}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>photo:</strong>{" "}
            <img src={doctor.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt=" " />
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>email</strong> {doctor.email}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>paitents:</strong>
            <ListGroup>
              {doctor.paitents.map(paitent => (
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {paitent.firstName} {paitent.midName} {paitent.lastName}
                  </span>
                  <span>{paitent.MNR}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>questions:</strong>
            <ListGroup>
              {doctor.questions.map(question => (
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>{question.question}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>visits:</strong>
            <ListGroup>
              {doctor.visits.map(visit => (
                <ListGroup.Item>
                  <span style={{ marginLeft: 10 }}>
                    {visit.date} {visit.idPaitent}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
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

export default DoctorViewModal
