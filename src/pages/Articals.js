import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import diabetesContext from "../utils/diabetesContext"
import ArticalRow from "../components/ArticalRow"
import ArticalAddModal from "../components/ArticalAddModal"

function Articals() {
  const { articals } = useContext(diabetesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Articals</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>title </th>
            <th style={{ width: "30%" }}>description</th>
            <th style={{ width: "10%" }}>image</th>
            <th style={{ width: "9%" }}>auther</th>
          </tr>
        </thead>
        <tbody>
          {articals.map(artical => (
            <ArticalRow key={artical._id} artical={artical} />
          ))}
        </tbody>
      </Table>
      <ArticalAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Articals
