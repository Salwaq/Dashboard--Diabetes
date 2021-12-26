import { useState } from "react"
import { Button } from "react-bootstrap"
import DoctorViewModal from "./DoctorViewModal"
function DoctorRow(props) {
  const { doctor } = props
  const [viewShow, setViewShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{doctor._id}</td>
      <td>{doctor.firstName}</td>
      <td>{doctor.lastName}</td>
      <td>{doctor.email}</td>
      <img src={doctor.avatar} style={{ objectFit: "contain", height: "100px", width: "100%" }} />
      <td>{doctor.role}</td>
      <td>
        {" "}
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
      </td>

      <DoctorViewModal show={viewShow} setShow={setViewShow} doctor={doctor} />
    </tr>
  )
}
export default DoctorRow
