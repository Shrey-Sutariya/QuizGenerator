import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Test_TopBar({Quiz}){
    const [time, setTime] = useState(5 * 60); 
    const navigate=useNavigate();
  
    useEffect(() => {
      if (time <= 0) return; 
  
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(timer); 
    }, [time]);
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    
    const handleExit = () => {
        const confirmed = window.confirm("Are you sure you want to exit? Your progress may be lost.");
        if (confirmed) {
           
            alert("Exiting test...");
            navigate('/TestDetails')
        }
    };

    return (
        <div>
            <div className="font-sans flex justify-between font-bold p-2 text-3xl">
                <p>{Quiz.Topic}</p>
                <p className="text-center">{minutes} : {seconds}</p>
            </div>
            <div className="flex justify-between">
                <div className="p-2 text-sm font-sans">
                    <p>Test id : {Quiz._id}</p>
                    <p>Test Number : {Quiz.TestNumber}</p>
                    <p>Test Level : {Quiz.Difficulty}</p>
                </div>
                <div className="flex items-end p-2 text-2xl font-sans font-bold">
                    <button onClick={handleExit}
                    className="p-2 bg-blue-100 shadow-lg transition-all duration-300 hover:bg-red-600">Exit Test</button>
                </div>
            </div>
        </div>
    )
}