import Banner from "./components/Banner"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="flex flex-col w-full h-[2000px] bg-[#f1f1f1]">
      <Navbar />
      <Banner />
    </div>
  )
}

export default App
