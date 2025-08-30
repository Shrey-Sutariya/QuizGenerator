import { useEffect, useState } from "react"

export default function Carousel(){
    const text=[
        "Quiz on History","Test your Math","Want to become Doctor?"
    ]
    const [id,setid]=useState(0);
    const [fade,setfade]=useState(true);
    console.log(fade , id);
    
    useEffect(()=>{
        const interval=setInterval(()=>{
                setfade(true)
                setid((prev) => (prev + 1) % text.length);
                setTimeout(()=>{
                    
                    setfade(false)
                },[4500])
                
            
            
        },5000)

        return () => clearInterval(interval);
        
    },[text.length])

    return (
        
            <div className="w-1/2 h-[50vh] flex flex-col gap-3 justify-center items-center text-black shadow-md">
            <span
                className={`bg-transparent text-[clamp(1rem,4vw,4rem)] text-center  font-serif font-bold transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
                }`}
                >
                {text[id]}
            </span>
            <span 
                className="font-serif text-center">
                Quizzy is a sophisticated artificial intelligence-powered question generator meticulously engineered to transform and optimize question and exam creation processes.
                </span>
                <button 
                className="bg-blue-600 p-2 rounded-lg">No credit card needed
                </button>
            </div>
        
    )
}