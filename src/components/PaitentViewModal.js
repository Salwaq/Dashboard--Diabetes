import { Button, ListGroup, Modal } from "react-bootstrap"

function PaitentViewModal(props) {
  const { show, setShow, paitent } = props

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>View Paitent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name</strong> {paitent.firstName} {paitent.midName} {paitent.lastName}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>MNR:</strong> {paitent.MNR}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>photo:</strong>{" "}
            <img src={paitent.avatar} style={{ objectFit: "contain", height: "200px", width: "100%" }} alt=" " />
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>Gender</strong> {paitent.gendar}
          </ListGroup.Item>

          <ListGroup.Item>
            {paitent.doctor ? (
              <div>
                <strong>doctor:</strong>
                <ListGroup>{paitent.doctor.firstName}</ListGroup>
              </div>
            ) : null}
          </ListGroup.Item>

          <ListGroup.Item>
            <strong>visits:</strong>
            <ListGroup>
              {paitent.visits.map(visit => {
                const date = new Date(visit.date)

                return (
                  <ListGroup.Item>
                    <span style={{ marginLeft: 10 }}>{date.toDateString()}</span>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>

            <strong>questions and answer:</strong>
            <ListGroup.Item>
              <ListGroup>
                {paitent.questions.map(question => (
                  <ListGroup.Item>
                    <span style={{ marginLeft: 10 }}>{question.question}</span>

                    <span style={{ marginLeft: 10 }}>{question.answer}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup.Item>
          {paitent.infoPaitent ? (
            <ListGroup.Item>
              <strong>infoPaitent:</strong>
              <ListGroup>
                <ListGroup.Item>
                  {/* <span style={{ marginLeft: 10 }}>{paitent.infoPaitent}</span> */}
                  <h6> bloodType</h6>
                  {paitent.infoPaitent.bloodType}
                  <h6>weight</h6> {paitent.infoPaitent.weight}
                  <h6>height</h6>
                  {paitent.infoPaitent.height}
                  <h6>cumulativeDiabetes</h6>
                  <ListGroup>
                    {paitent.infoPaitent.cumulativeDiabetes.map(cumulativeDiabete => (
                      <ListGroup.Item>
                        <span style={{ marginLeft: 10 }}>{cumulativeDiabete.cumulativeDiabetes}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </ListGroup.Item>
                <h6> cumulative Diabetes Average</h6>
                {paitent.infoPaitent.CdAverage}
              </ListGroup>
            </ListGroup.Item>
          ) : null}
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

export default PaitentViewModal
