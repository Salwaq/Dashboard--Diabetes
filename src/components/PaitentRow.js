import { useState } from "react"
import { Button } from "react-bootstrap"
import ChangeDrModal from "./ChangeDrModal"
import PaitentDeleteModal from "./PaitentDeleteModal"
import PaitentViewModal from "./PaitentViewModal"

function PaitentRow(props) {
  const { paitent } = props
  const [viewShow, setViewShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [changeShow, setChangeShow] = useState(false)

  return (
    <>
      <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
        <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{paitent._id}</td>
        <td>
          {paitent.firstName} {paitent.midName} {paitent.lastName}
        </td>
        <td style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>{paitent.phoneNumber}</td>
        <td>
          <img src={paitent.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt=" " />
        </td>
        <td>{paitent.MNR}</td>
        <td>
          <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
            View
          </Button>

          <Button variant="success" className="me-2" onClick={() => setChangeShow(true)}>
            change DR
          </Button>
          <Button variant="danger" onClick={() => setDeleteShow(true)}>
            Delete
          </Button>
        </td>
        <PaitentViewModal show={viewShow} setShow={setViewShow} paitent={paitent} />
        <PaitentDeleteModal show={deleteShow} setShow={setDeleteShow} paitentId={paitent._id} />
        <ChangeDrModal
          key={paitent._id}
          show={changeShow}
          setShow={setChangeShow}
          paitentId={paitent._id}
          paitent={paitent}
        />
      </tr>
    </>
  )
}

export default PaitentRow
