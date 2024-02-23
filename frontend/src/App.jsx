import Banner from "./components/Banner"
import Features from "./components/Features"
import Navbar from "./components/Navbar"
import PhoneNumber from "./components/PhoneNumber"

function App() {
  return (
    <div className="flex flex-col w-full h-[2000px] bg-[#f1f1f1]">
      <PhoneNumber/>
      <Navbar />
      <Banner />
      <Features/>
    </div>
  )
}

export default App
