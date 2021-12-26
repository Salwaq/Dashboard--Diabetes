import { Button } from "react-bootstrap"
import { useContext, useState } from "react"
import { Table } from "react-bootstrap"
import AddIcon from "@mui/icons-material/Add"
import diabetesContext from "../utils/diabetesContext"
import PaitentRow from "../components/PaitentRow"
import PaitentAddModal from "../components/PaitentAddModal"

function Paitents() {
  const { paitents } = useContext(diabetesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Paitents</h1>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "18%" }}>name </th>
            <th style={{ width: "18%" }}>..</th>
            <th style={{ width: "18%" }}>..</th>
            <th style={{ width: "9%" }}>..</th>
            <th style={{ width: "36%" }}>..</th>
          </tr>
        </thead>
        <tbody>
          {paitents.map(paitent => (
            <PaitentRow key={paitents._id} paitent={paitent} />
          ))}
        </tbody>
      </Table>
      <PaitentAddModal show={show} setShow={setShow} />
    </>
  )
}

export default Paitents
