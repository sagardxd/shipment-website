import { GlobeDemo } from "../components/Globe"
import { NavbarDemo } from "../components/Navbar"

const LandingPage = () => {
    return (
        <div className="bg-white w-full h-screen">
            <NavbarDemo />
            <div className="flex flex-col justify-center items-center h-screen text-white gap-2">
                <h1 className="text-4xl tracking-tight md:text-6xl text-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#000000] to-[#434343] "> SafeShip</h1>
                <p className="text-3xl tracking-tight font-bold md:text-6xl text-center text-zinc-800  px-4  w-fit">Where every parecel matters!</p>
                <div className="text-sm md:text-xl text-zinc-600 mt-4 max-w-sm md:max-w-2xl text-center mx-auto px-2 __className_7df6af">SecureShip ensures the safety and timely delivery of your precious cargo, employing state-of-the-art security measures and efficient logistics solutions.</div>
            </div>
            <div>

            </div>
            <div>
            <GlobeDemo />
            </div>
        </div>
    )
}

export default LandingPage
