import { NavbarDemo } from "../components/Navbar"

const LandingPage = () => {
    return (
        <div className="bg-black w-full h-screen">
            <NavbarDemo />
            <div className="flex flex-col justify-center items-center h-screen text-white ">
                <h1 className="text-4xl tracking-tight md:text-6xl text-center text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 md:mb-4"> SafeShip</h1>
                <p className="text-3xl tracking-tight font-bold md:text-6xl text-center text-neutral-800 dark:text-neutral-200 px-4 pb-4 w-fit">Where every parecel matters!</p>
                <div className="text-sm md:text-xl text-neutral-400 dark:text-neutral-300 mt-4 max-w-sm md:max-w-2xl text-center mx-auto px-2 __className_7df6af">SecureShip ensures the safety and timely delivery of your precious cargo, employing state-of-the-art security measures and efficient logistics solutions. With us, your shipments are in trusted hands, providing you with peace of mind and reliability every step of the way</div>
            </div>

            
        </div>
    )
}

export default LandingPage
