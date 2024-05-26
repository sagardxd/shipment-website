import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminAuth from "./pages/Admin-Auth"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/admin-auth" element={<AdminAuth/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
