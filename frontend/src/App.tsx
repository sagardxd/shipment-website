import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminAuth from "./pages/Admin-Auth"
import AdminDashboard from "./pages/AdminDashboard"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin-auth" element={<AdminAuth/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
