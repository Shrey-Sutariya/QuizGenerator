import axios from "axios";
import Question from "./Question";
import Submit from "./Submit";
import Test_TopBar from "./TestTopBar";
import { useEffect, useState } from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function GiveTest({test}){
    const [Result,SetResult]=useState(false)
    const [TestId,setTestId]=useState(null);

    const handel_Submit_Button = async ()=>{
        const confirm=window.confirm("Submit test ?")
        if(confirm){
            alert('Submiting test..');
            try{
                const token = localStorage.getItem("token")
                const res=await axios.post("http://localhost:3000/Submit",{
                    id:test._id,
                    UserRes : userAns
                },{
                    
                    headers : {
                        authorization : `${token}`
                    }
                })
                console.log(res.data.id);
                
                setTestId(res.data.id);
                SetResult(true);

            }catch(err){
                console.log("error",err);
                
            }
        }
    }

    const handel_Submit = async ()=>{
            alert('Submiting test..');
            try{
                const token = localStorage.getItem("token")
                const res=await axios.post("http://localhost:3000/Submit",{
                    id:test._id,
                    UserRes : userAns
                },{    
                    headers : {
                        authorization : `${token}`
                    }
                })
            
                setTestId(res.data.id);
                SetResult(true);
            }catch(err){
                console.log("error",err);     
            }
    }

    useEffect(()=>{
        const Timeout=setTimeout(()=>{
            handel_Submit()
        },5*60*1000)

        return ()=> clearTimeout(Timeout)
    },[])
    const [userAns,setUserAns]=useState({});
    console.log(userAns);
    
    return (
        <div>
            <Test_TopBar Quiz={test}/>
            <Question Quiz={test} setState={setUserAns} />
            <Submit onClick={handel_Submit_Button}/>
            {Result && <ResultCard id={TestId}/>}
        </div>
    )
}