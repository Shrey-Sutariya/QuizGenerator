import Input from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Module/NavBar/NavBar";
export default function SignIn(){
    const [Username,setUsername]=useState(" ");
    const [Password,setPassword]=useState(" ");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-1 min-h-screen bg-[length:200%_200%] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-gradient-x">
            <div >
                <Navbar/>
            </div>
            <div className="flex flex-1">
            <div className="w-full max-w-md mx-auto mt-4 justify-center">
                <div className="">
                    <p className="pl-2">User Name</p>
                    <Input type="text" placeholder="shrey1012" onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                </div>

               
                <div>
                    <p className="pl-2">Password</p>
                    <Input type="text" placeholder="abcd@1234" onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                </div>

                <div>
                    <Button lable="Submit" onClick={async ()=>{
                        const res=await axios.post('http://localhost:3000/SignIn',{                        
                                username : Username,
                                password: Password
                        })
                        localStorage.setItem("token",res.data.token)
                        navigate('/')
                    }}/>
                </div>
                <div className="flex justify-center">
                    <p className="p-1">Don't have account ? <Link className="text-blue-600 px-2" to="/SignUp">Sign-Up</Link></p>
                </div>
            </div>
            </div>
        </div>
    )
}