import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { Table } from "react-bootstrap"
import UsersCell from "../components/UsersCell"
import AddIcon from "@mui/icons-material/Add"
import UserAddModal from "../components/UserAddModel"
import diabetesContext from "../utils/diabetesContext"
function Users() {
  const { users } = useContext(diabetesContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1 style={{ marginTop: 10 }}>Users</h1>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ marginRight: 40, marginBottom: 10 }} onClick={() => setShow(true)} variant="outline-primary">
          <AddIcon />
        </Button>
      </div>
      <Table bordered hover style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ width: "9%" }}>#</th>
            <th style={{ width: "9%" }}>First Name</th>
            <th style={{ width: "9%" }}>Last Name</th>
            <th style={{ width: "18%" }}>Email</th>
            <th style={{ width: "18%" }}>Avatar</th>
            <th style={{ width: "18%" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <UsersCell key={user._id} user={user} />
          ))}
        </tbody>
      </Table>
      <UserAddModal show={show} setShow={setShow} />
    </>
  )
}
export default Users
