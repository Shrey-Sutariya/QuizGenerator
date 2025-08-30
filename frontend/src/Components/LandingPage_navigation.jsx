import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import SignIn_SignUp from "./SignUp_SignIn_Button";
import Home_Test_details from "./Home_TestDetails_Button";
import Logo from "./Logo";

export default function LandingPage_Nav(){
    const navigate=useNavigate()
    const [Logout,setLogout]=useState(false);
   
    const [user,setuser]=useState(null);
    const token=localStorage.getItem("token");
    useEffect(()=>{
        if (!token) return;
        axios.get('http://localhost:3000/Userdetails',{
            headers : {
                authorization : `${token}`
            }
        }).then((res)=>{
            setuser(res.data.username)
        })
},[])

    
    return (
    <div className="bg-orange-300 flex flex-col flex-centre md:flex md:flex-row md:items-center md:justify-between p-3">
  

       <Logo/>


        <Home_Test_details/>

        {user ? (
            <div className="relative">
                <div onClick={()=>{
                    
                    setLogout(!Logout);
                }}
                className="flex font-semibold sm:p-4">
                    <img
                    className="h-8 w-auto m-1"
                    src="/src/Img/User.png"/>
                    <span
                    className="hidden  md:flex md:flex-row md:justify-center md:items-center">
                        {user}
                    </span>
                    
                </div>
                {Logout && (
                        <div className="absolute w-32 bg-purple-600 rounded shadow-lg p-2 flex flex-col">
                            <button onClick={()=>{
                                localStorage.removeItem("token")
                                navigate('/')
                            }}>
                                Logout
                            </button>
                        </div>
                    )

                }
            </div>
        ):(
            <SignIn_SignUp/>
        )}
        
</div>
    )
}