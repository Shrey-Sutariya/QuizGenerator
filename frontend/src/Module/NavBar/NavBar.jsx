import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar(){
    const [Open,setOpen]=useState(false);
    const [Scroll,setScroll] = useState(false);
    const [User,setUser]=useState(false);
    const [Logout,setLogout]=useState(false);
    const navigate = useNavigate();
    const token=localStorage.getItem("token");
    useEffect(() => {
        if (!token) return;
        axios.get('http://localhost:3000/Userdetails',{
            headers : {
                authorization : `${token}`
            }
        }).then((res)=>{
            setUser(res.data.username)
        })
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setScroll(true);
          } else {
            setScroll(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    return (
        <>
        <div className= {`sticky top-0 z-50 transition-all duration-500 flex justify-between items-center md:px-4 border md:py-5 ${
            Scroll ? "bg-blue-600/90 shadow-md" : "bg-transparent"
          }`} >
            <div className="font-bold font-sans">
                Quizzy
            </div>
            <div className="hidden sm:flex sm:justify-between sm:gap-1">
                <button className="hover:bg-blue-100 transition-colors duration-300 rounded-md px-4 py-2 font-serif font-semibold"
                onClick={()=>{
                    navigate('/')
                }}>
                    Home
                </button>
                <button className=" hover:bg-blue-100 transition-colors duration-300 rounded-md px-4 py-2 font-serif font-semibold"
                onClick={()=>{
                    navigate('/TestDetails')
                }}>
                    My Test
                </button>
            </div>

            {User?(
                <div className="relative">
                <div onClick={()=>{
                    
                    setLogout(!Logout);
                }}
                className="flex">
                    <img
                    className="h-8 w-auto m-1"
                    src="/src/Img/User.png"/>
                    <span
                    className="hidden  md:flex md:flex-row md:justify-center md:items-center">
                        {User}
                    </span>
                    
                </div>
                
                        <div className={`absolute w-32 bg-blue-100 font-serif font-bold rounded shadow-lg p-2 flex flex-col transition-all duration-500
                            ${Logout ? "max-h-[40vh] opacity-100" : "max-h-0 opacity-0"}`
                            
                        }>
                            <button onClick={()=>{
                                localStorage.removeItem("token")
                                navigate('/')
                            }}>
                                Logout
                            </button>
                        </div>
            

                
            </div>
                ):(
                <div className="hidden sm:block">
                <button className="hover:bg-blue-100 transition-colors duration-300 rounded-md px-4 py-2 font-serif font-semibold"
                onClick={()=>{
                    navigate('/SignIn')
                }}>
                    Login
                </button>
                  </div>
            )}
            
            
                <div className="sm:hidden mr-1" onClick={()=>{
                    setOpen(!Open)
                }}>
                    <img className="h-5 items-center"
                    src="/src/Img/3Dots.png"/>
                </div>
               
        </div>
         {Open && (
            <div className="absolute top-full flex flex-col left-0 w-full p-1 shadow-md z-40">
            <button onClick={()=>{
                                
                                navigate('/')
                            }}
            className="hover:bg-blue-100 transition-colors duration-300 rounded-md px-2 py-2 font-serif font-semibold flex justify-start">
                Home
            </button>
            <button onClick={()=>{
                                
                                navigate('/TestDetails')
                            }}
            className=" hover:bg-blue-100 transition-colors duration-300 rounded-md px-2 py-2 font-serif font-semibold flex justify-start">
                My Test
            </button>
            <button onClick={()=>{
                               if (User) {
                                localStorage.removeItem("token");
                                navigate("/");
                              } else {
                                navigate("/SignIn")
                            }}}
            className=" hover:bg-blue-100 transition-colors duration-300 rounded-md px-2 py-2 font-serif font-semibold flex justify-start">
                {User?"Logout":"Login"}
            </button>
        </div>
        )}
        </>
    
    )
}