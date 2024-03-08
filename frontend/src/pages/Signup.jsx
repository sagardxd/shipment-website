import { useState } from "react";
import AuthHeader from "../components/AuthHeader"
import Branding from "../components/Branding"
import { LabelledInput } from "../components/LabelledInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState({
    email: "",
    password: "",
    name: ""
  });



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen justify-center flex flex-col items-center gap-2">
        <div>
          <AuthHeader type={"signup"} />
          <div className="flex flex-col gap-4">
            <LabelledInput label="Name" placeholder="Sagardxd" onChange={(e) => {
              setpostInputs({
                ...postInputs,
                name: e.target.value
              })
            }} />
            <LabelledInput label="Email" placeholder="sagardxd@gmail.com" onChange={(e) => {
              setpostInputs({
                ...postInputs,
                email: e.target.value
              })
            }} />
            <LabelledInput label="Phone" placeholder="+91 8269630772" onChange={(e) => {
              setpostInputs({
                ...postInputs,
                password: e.target.value
              })
            }} />
            <LabelledInput label="Otp" placeholder="1234" onChange={(e) => {
              setpostInputs({
                ...postInputs,
                password: e.target.value
              })
            }} />
            <div> <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Send Otp</button>
              <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>


      <div className="hidden lg:block">
        <Branding />
      </div>
    </div>
  )
}

export default Signup
