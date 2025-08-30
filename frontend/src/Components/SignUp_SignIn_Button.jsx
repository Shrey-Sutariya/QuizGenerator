import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SignIn_SignUp(){
    const navigate = useNavigate();
    const [open,setopen]=useState(false);
    return (
        <>
            <div className="flex flex-wrap gap-2 sm:gap-4 m-2">
        
        <div className="hidden sm:gap-2 sm:flex">
            <button
            className="bg-white rounded shadow hover:bg-gray-100
                        px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
            onClick={() => navigate('/SignUp')}
            >
            Register
            </button>
            <button
            className="bg-white rounded shadow hover:bg-gray-100
                        px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
            onClick={() => navigate('/SignIn')}
            >
            Login
            </button>
        </div>

        <div className="relative sm:hidden">
                <button
                className="bg-white rounded shadow hover:bg-gray-100 p-2"
                onClick={() => setopen(!open)}
                >
                ⋮
                </button>

                {open && (
                    <div className="absolute mt-2 w-32 bg-white rounded shadow-lg p-2 flex flex-col">
                        <button
                        className="px-3 py-2 text-sm hover:bg-gray-200 rounded"
                        onClick={() => {
                            navigate("/SignUp");
                            setopen(false);
                        }}
                        >
                        Register
                        </button>
                        <button
                        className="px-3 py-2 text-sm hover:bg-gray-100 rounded"
                        onClick={() => {
                            navigate("/SignIn");
                            setopen(false);
                        }}
                        >
                        Login
                        </button>
                </div>
                )}
        </div>
    
</div>
        </>
    )
}