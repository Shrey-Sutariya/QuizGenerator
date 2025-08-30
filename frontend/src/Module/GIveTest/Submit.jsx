export default function Submit({onClick}){
    return (
        <div className="flex justify-center p-2 m-2">
        <button className="p-2 bg-blue-800 hover:bg-blue-500 transition-all duration-200 font-sans font-bold text-white text-2xl rounded-md shadow-lg"
        onClick={onClick}
        >Submit</button>
        </div>
    )
}