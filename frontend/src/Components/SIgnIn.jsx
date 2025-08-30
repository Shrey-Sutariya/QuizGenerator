import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  return (
    <div>
      {username ? (
        
        <span className="text-gray-800 font-medium px-3 py-2">
          Welcome, {username}
        </span>
      ) : (
       
        <button
          className="bg-white rounded shadow hover:bg-gray-100
                     px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base"
          onClick={() => navigate("/SignIn")}
        >
          Login
        </button>
      )}
    </div>
  );
}
