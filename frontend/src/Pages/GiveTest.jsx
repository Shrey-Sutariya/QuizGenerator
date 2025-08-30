import GiveTest from "../Module/GIveTest/GiveTest";
import Submit from "../Module/GIveTest/Submit";
import { useLocation } from "react-router-dom";

export default function Submit_Test(){
   
    
    const location = useLocation();
    const test=location.state
    

    return (
        <div className="flex flex-col gap-1 min-h-screen bg-[length:200%_200%] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-gradient-x">
          <GiveTest test={test.test[0]}/>
        </div>
    )
}