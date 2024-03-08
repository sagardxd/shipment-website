import { ChangeEvent} from "react";



export function LabelledInput({ label, placeholder, onChange, type }) {

    return <div className="">
        <label className="block mb-1 text-sm  text-gray-900 font-bold ">{label}</label>
        <input type={type || "text"} onChange={onChange} placeholder={placeholder} className="bg-gray-50 border
         border-gray-300 text-black-400 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
    </div>
}