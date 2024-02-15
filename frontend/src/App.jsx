import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import PhoneNumber from "./components/PhoneNumber"

function App() {
  return (
    <div className="flex flex-col w-full h-[2000px] bg-[#f1f1f1]">
      <PhoneNumber/>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App
