import { useEffect, useState } from "react";
import axios from "axios";
import TestDetails from "../Module/TestDetails/TestDetails";
import CreateQuiz from "../Module/CreateTest/CreateTest";
import Navbar from "../Module/NavBar/NavBar";

export default function TestDetails_Page(){
    const token=localStorage.getItem("token")
    const [test,settest]=useState([])
    const [refresh,setRefresh]=useState(false)
    useEffect(()=>{
        if(!token) return;
        axios.get('http://localhost:3000/TestDetails',{
            headers: {
                authorization:`${token}`
            }
        }).then((res)=>{
            settest(res.data.test)
            console.log(res.data.test);
            
        })
    },[refresh])
    return (
        <div className="flex flex-col gap-1 min-h-screen bg-[length:200%_200%] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-gradient-x">
           
            <div className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
                <Navbar/>
            </div>
            <div>
                {test.map((item,index)=>(
                    <TestDetails test={item}/>
                ))}
            </div>
            <div className="fixed bottom-6 right-6">
                <CreateQuiz onUpdate={() => setRefresh(!refresh)} />
            </div>
        </div>
    )
}