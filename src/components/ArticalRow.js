import { useState } from "react"
import { Button } from "react-bootstrap"
import ArticalDeleteModal from "./ArticalDeleteModal"
import ArticalEditModal from "./ArticalEditModal"
import ArticalViewModal from "./ArticalViewModal"
function ArticalRow(props) {
  const { artical } = props
  const [viewShow, setViewShow] = useState(false)
  const [editShow, setEditShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  return (
    <tr style={{ verticalAlign: "middle", tableLayout: "fixed", wordWrap: "break-word" }}>
      <td style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{artical._id}</td>
      <td>{artical.title}</td>
      <td>{artical.description}</td>

      <img src={artical.image} style={{ objectFit: "contain", height: "100px", width: "100%" }} alt=" " />
      <td>{artical.auther}</td>
      <td>
        {" "}
        <Button variant="info" className="me-2" onClick={() => setViewShow(true)}>
          View
        </Button>
        <Button variant="success" className="me-2" onClick={() => setEditShow(true)}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => setDeleteShow(true)}>
          Delete
        </Button>
      </td>

      <ArticalViewModal show={viewShow} setShow={setViewShow} artical={artical} />
      <ArticalEditModal show={editShow} setShow={setEditShow} artical={artical} />
      <ArticalDeleteModal show={deleteShow} setShow={setDeleteShow} articalId={artical._id} />
    </tr>
  )
}
export default ArticalRow
