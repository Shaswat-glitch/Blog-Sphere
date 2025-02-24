import {Link} from "react-router-dom"
import { ChangeEvent,useState} from 'react';

export const Auth = ({type}:{type : "signup" | "signin"})=>{
   const [postInputs,setPostInputs] = useState({
    name:"",
    username:"",
    password:""
   })
    return (
        <div className="h-screen flex justify-center flex-col">
         <div className="flex justify-center " >
          <div>
         <div className="px-10">
          <div className="text-3xl font-extrabold">
            Create an acount
          </div>
          <div className="text-slate-400">
           {type === "signin" ? "Don't have an account?" : "Already have an account?"}
            <Link className="pt-2 underline" to={type === "signin" ?"/" : "/signin"}>{type === "signin" ? "signup" : "signin"}</Link>
          </div>
         </div>
         <div className="pt-5">
         <LabelledInput label="Name" placeholder="Shaswat..." onChange={(e)=>{
           setPostInputs({
            ...postInputs,
            name : e.target.value
           })
         }} />
         <LabelledInput label="Username" placeholder="Shaswatk@gmail.com" onChange={(e)=>{
           setPostInputs({
            ...postInputs,
            name : e.target.value
           })
         }} />
          <LabelledInput label="Password" type = {"password"} placeholder="12345" onChange={(e)=>{
           setPostInputs({
            ...postInputs,
            name : e.target.value
           })
         }} />
         <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup"? "sign up":"sign in"}</button>
        </div>
       </div>
     </div>
    </div>
    )
}
interface LabelledInputType {
    label : string;
    placeholder : string;
    onChange : (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string;
}
function LabelledInput({label,placeholder,onChange,type} : LabelledInputType){
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-black ">{label}</label>
            <input onChange ={onChange} type={ type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    )
}