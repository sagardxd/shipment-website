import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
