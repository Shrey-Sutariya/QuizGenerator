import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultCard({id}){
    const [Data,setData]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.get(`http://localhost:3000/Result`,{
            params: {
                id:id
              },
            headers : {
                authorization : `${token}`
            }
        }
        ).then((res)=>{
            setData(res.data)
        })
    },[])

    console.log("Result",Data);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
  <div className="flex flex-col justify-center w-11/12 sm:w-2/3 lg:w-1/3 p-6 rounded-xl shadow-2xl relative bg-white border border-gray-200">
    
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
      🏆 Your Score: <span className="text-blue-600">{Data.Result.Score}</span>
    </h2>

    <button
      onClick={() => navigate('/TestDetails')}
      className="self-center mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
    >
      ⬅ Back to Details
    </button>

  </div>
</div>

    )
}