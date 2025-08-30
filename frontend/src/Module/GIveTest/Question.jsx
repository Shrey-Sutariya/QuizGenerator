import { useState } from "react";

export default function Question({ Quiz,setState }) {
   
   
    
    return (
      <div className="flex flex-col gap-1">

       

        {Quiz.Questions.map((item) => (
          <div className="m-1 p-1"
          key={item.Q_no}>
            <form className="w-full shadow-lg bg-white bg-opacity-40 p-2">
              <div className="flex items-center">
                <span className="pr-2 flex items-center">{item.Q_no}</span>
                <span className="pt-0.5">{item.Question}</span>
              </div>
  
              
                <div className="flex flex-col gap-1 p-1 pl-2">
                  {Object.entries(item.Option).map(([key, value], id) => (
                    <label key={id}>
                      <input 
                        className="mr-2"
                        type="radio"
                        name={`option-${item.number}`} 
                        value={key}
                        onChange={(e)=>{
                          
                          setState((pre)=>(
                            {
                            ...pre,
                            [item.Q_no]:e.target.value
                            }
                        ))
                        }}
                      />
                      {value}
                    </label>
                  ))}
                </div>
              
            </form>
          </div>
        ))}
      </div>
    );
  }
  