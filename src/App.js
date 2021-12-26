import { CssBaseline } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import Sidebar from "./components/Sidebar"
import diabetesContext from "./utils/diabetesContext"
import Login from "./pages/Login"
import Users from "./pages/Users"
import Paitents from "./pages/Paitents"
import Doctors from "./pages/Doctors"
import Articals from "./pages/Articals"

function App() {
  const [paitents, setPaitents] = useState([])
  const [doctors, setDoctors] = useState([])
  const [users, setUsers] = useState([])
  const [articals, setArticals] = useState([])
  const navigate = useNavigate()

  const getPaitents = async () => {
    const response = await axios.get("http://localhost:8000/api/paitent", {
      headers: {
        Authorization: localStorage.tokenDashboardDiabetes,
      },
    })
    setPaitents(response.data)
    console.log(response.data)
  }

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8000/api/auth", {
      headers: {
        Authorization: localStorage.tokenDashboardDiabetes,
      },
    })
    setUsers(response.data)
  }

  const getArticals = async () => {
    const response = await axios.get("http://localhost:8000/api/article", {
      headers: {
        Authorization: localStorage.tokenDashboardDiabetes,
      },
    })
    setArticals(response.data)
  }

  const getDoctors = async () => {
    const response = await axios.get("http://localhost:8000/api/doctors", {
      headers: {
        Authorization: localStorage.tokenDashboardDiabetes,
      },
    })
    setDoctors(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    getPaitents()
    getUsers()
    getDoctors()
    getArticals()
  }, [])

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const adminBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:8000/api/auth/login-admin", adminBody)
      localStorage.tokenDashboardDiabetes = response.data
      toast.success("login success")
      navigate("/")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addPaitent = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const paitentBody = {
        firstName: form.elements.firstName.value,
        midName: form.elements.midName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        gendar: form.elements.gendar.value,
        phoneNumber: form.elements.phoneNumber.value,
        insurance: form.elements.insurance.value,
        smoking: form.elements.smoking.value,
        doctor: form.elements.doctor.value,
      }
      await axios.post(`http://localhost:8000/api/paitent/signup`, paitentBody, {
        headers: {
          Authorization: localStorage.tokenDashboardDiabetes,
        },
      })
      getPaitents()
      toast.success("add paitent success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addArtical = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const articalBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.post(`http://localhost:8000/api/article`, articalBody, {
        headers: {
          Authorization: localStorage.tokenDashboardDiabetes,
        },
      })
      getArticals()
      toast.success("add artical success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const editArtical = async (e, articalId) => {
    e.preventDefault()
    try {
      const form = e.target

      const articalBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:8000/api/article/${articalId}`, articalBody, {
        headers: {
          Authorization: localStorage.tokenDashboardDiabetes,
        },
      })
      getArticals()
      toast.success("edit artical success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const deleteArtical = async articalId => {
    try {
      await axios.delete(`http://localhost:8000/api/article/${articalId}`, {
        headers: {
          Authorization: localStorage.tokenDashboardDiabetes,
        },
      })
      toast.success("Cast deleted")
      getArticals()
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }

  const addDoctor = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const doctorBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        avatar: form.elements.avatar.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      await axios.post(`http://localhost:8000/api/doctors/add-doctor`, doctorBody, {
        headers: {
          Authorization: localStorage.tokenDashboardDiabetes,
        },
      })
      getDoctors()
      toast.success("add doctor success")
    } catch (error) {
      if (error.response) toast.error(error.response.data)
      else console.log(error)
    }
  }
  const store = {
    paitents,
    login,
    users,
    doctors,
    addPaitent,
    addDoctor,
    articals,
    addArtical,
    editArtical,
    deleteArtical,
  }

  return (
    <diabetesContext.Provider value={store}>
      <ToastContainer />
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
          <Routes>
            <Route
              path="/paitents"
              element={localStorage.tokenDashboardDiabetes ? <Paitents /> : <Navigate to="/login" />}
            />
            <Route
              path="/doctors"
              element={localStorage.tokenDashboardDiabetes ? <Doctors /> : <Navigate to="/login" />}
            />

            <Route
              path="/articals"
              element={localStorage.tokenDashboardDiabetes ? <Articals /> : <Navigate to="/login" />}
            />
            <Route path="/users" element={localStorage.tokenDashboardDiabetes ? <Users /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </Box>
    </diabetesContext.Provider>
  )
}

export default App
