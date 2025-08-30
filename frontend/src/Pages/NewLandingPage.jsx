import Carousel from "../Module/Carousel/Carousel";
import Navbar from "../Module/NavBar/NavBar";

export default function NewLandingPage(){
    return(
        <div className="flex flex-col gap-1 min-h-screen bg-[length:200%_200%] bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 animate-gradient-x">
            <div className="sticky top-0 z-50 bg-transparent backdrop-blur-sm">
                <Navbar/>
            </div>
           
            <div className="shrink-0 min-h-[calc(100vh-4rem)] flex-1 flex justify-center items-center">
            <Carousel />
            </div>
            
            <footer className="bg-black text-white text-center p-4">
            © 2025 Quizzy. All Rights Reserved.
            </footer>

        </div>
    )
}