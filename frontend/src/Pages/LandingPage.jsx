import { useNavigate } from "react-router-dom"
import LandingPageCmp from "../Components/LandingPage_Caroule";
import LandingPage_Nav from "../Components/LandingPage_navigation";
export default function LandingPage() {
   
    return (
        <div className="relative min-h-screen w-full">
         
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/src/Img/Background.webm" type="video/webm" />
          </video>
    

    
          
          <div className="relative flex flex-col min-h-screen">
                <LandingPage_Nav/>
                <div className="flex flex-1 items-center justify-center">
                    <LandingPageCmp/>
                </div>

          </div>
         
        </div>
      );
}
