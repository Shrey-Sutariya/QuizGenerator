import { useState } from "react"
import DropDown from "./TestDetails_DropDown";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TestDetails({ test }) {
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="p-3 m-2 shadow-lg rounded-md">
      
      <div
        onClick={() => setOpen(!Open)}
        className="flex justify-between p-2 cursor-pointer"
      >
        <p className="font-[Georgia,serif] font-bold">Test {test.TestNumber}</p>
        <p className="font-[Georgia,serif] font-bold">{test.Status}</p>
      </div>

   
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          Open ? "max-h-[40vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-3 border rounded-lg bg-blue-300">
          <DropDown testinfo={test} />

          <div className="flex flex-row justify-start mt-1">
            <button onClick={async ()=>{
                try{
                    const token = localStorage.getItem("token")
                    const id=test._id;
                    const res=await axios.get(`http://localhost:3000/TestDetails?id=${id}`,{
                        headers : {
                            authorization : `${token}`
                        }
                    })
                    console.log("res.data",res.data);
                    
                    navigate('/GiveTest',{state:res.data})
                }catch(err){
                    console.error("Error fetching data:", err);
                }
                
            }}
            className="bg-blue-950 rounded-xl text-white p-2 m-1 text-[clamp(0.5rem,1.5vw,1rem)]">
              Give test
            </button>
            <button className="bg-blue-950 rounded-xl text-white p-2 m-1 text-[clamp(0.5rem,1.5vw,1rem)]">
              View Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
