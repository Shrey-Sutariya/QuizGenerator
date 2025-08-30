import { useNavigate } from "react-router-dom";

export default function Home_Test_details(){
    const navigate = useNavigate();
    return (
    <div className="flex flex-wrap gap-2 sm:gap-4 m-2">
        <button
        className="rounded shadow hover:bg-gray-100
                    px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
        onClick={() => navigate('/')}
        >
        Home
        </button>
        <button
        className="rounded shadow hover:bg-gray-100
                    px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
        onClick={() => navigate('/TestDetails')}
        >
        My Test
        </button>
    </div>
    )
}