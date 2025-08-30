import Input from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LandingPage_Nav from "../Components/LandingPage_navigation";
import Navbar from "../Module/NavBar/NavBar";

export default function SignUp(){
    const [Username,setUsername]=useState(" ");
    const [Firstname,setFirstname]=useState(" ");
    const [lastname,setlastname]=useState(" ");
    const [Email,setEmail]=useState(" ");
    const [Password,setPassword]=useState(" ");
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-1 min-h-screen bg-[length:200%_200%] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-gradient-x">
            <div className="flex-none">
            <Navbar/>
            </div>
            
            <div className="flex-1 flex-col justify-center">
                <div className="w-full max-w-md mx-auto m-4">

                    <div className="">
                        <p className="pl-2">User Name</p>
                        <Input type="text" placeholder="shrey1012" onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>
                    </div>

                    <div className="">
                        <p className="pl-2">First Name</p>
                        <Input type="text" placeholder="Shrey" onChange={(e)=>{
                            setFirstname(e.target.value)
                        }}/>
                    </div>

                    <div className="">
                        <p className="pl-2">last Name</p>
                        <Input type="text" placeholder="Sutariya" onChange={(e)=>{
                            setlastname(e.target.value)
                        }}/>
                    </div>

                    <div className="">
                        <p className="pl-2">Email</p>
                        <Input type="text" placeholder="shrey1012@gmail.com" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>

                    <div className="">
                        <p className="pl-2">Password</p>
                        <Input type="text" placeholder="abcd@1234" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>

                    <div className="">
                        <Button lable="Submit" onClick={async ()=>{
                            const res=await axios.post('http://localhost:3000/SignUp',{                        
                                    username : Username,
                                    firstname: Firstname,
                                    lastname: lastname,
                                    password: Password,
                                    email: Email
                            })
                            localStorage.setItem("token",res.data.token)
                            navigate('/TestDetails')
                        }}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="p-1">Alredy have an account ? <Link className="text-blue-600 px-2" to="/SignIn">Sign-In</Link></p>
                </div>
            </div>
        </div>
    )
}