import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminAuth from "./pages/Admin-Auth"
import AdminDashboard from "./pages/AdminDashboard"
import ItemDetails from "./pages/ItemDetails"
import UpdateShipment from "./pages/UpdateShipment"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin-auth" element={<AdminAuth/>}/>
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      <Route path="/details/:awbNumber" element={<ItemDetails />} />
      <Route path="/update/:awbNumber" element={<UpdateShipment />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
