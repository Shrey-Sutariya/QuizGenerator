import Carousel from "./Carousel"

export default function LandingPageCmp(){
    const img = [
        
        "/src/Img/Quiz_Image.jpg",
        "/src/Img/Quiz2.jpg",
        "/src/Img/Quiz3.webp"
    ]
    return (
        <div className="w-full">
            
                <Carousel img={img}/>
            
        </div>
    )
}