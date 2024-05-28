import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminAuth from "./pages/AdminAuth"
import AdminDashboard from "./pages/AdminDashboard"
import ItemDetails from "./pages/ItemDetails"
import UpdateShipment from "./pages/UpdateShipment"
import AddShipment from "./pages/AddShipment"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin-auth" element={<AdminAuth/>}/>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/details/:awbNumber" element={<ItemDetails />} />
        <Route path="/update/:awbNumber" element={<UpdateShipment />} />
        <Route path="/add-shipment" element={<AddShipment />} />
        <Route path="/" element={<LandingPage />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
