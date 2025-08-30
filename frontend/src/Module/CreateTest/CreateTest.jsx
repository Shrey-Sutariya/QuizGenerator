import { useState } from "react";
import Button from "../../Components/Button";
import axios from "axios";

export default function CreateQuiz({onUpdate}) {
  const [showForm, setShowForm] = useState(false);
  const [Topic,setTopic]=useState("History");
  const [Level,setLevel]=useState("Easy");
 
  console.log("Topic" , Topic);
  console.log("Level", Level);
  
  
  return (
    <div className="flex items-center justify-center">
     
      <Button
        lable="Create Test"
        onClick={() => setShowForm(true)}
      />

     
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
         
          <div className="w-11/12 sm:w-2/3 lg:w-1/3 p-6 rounded-xl shadow-lg relative bg-white bg-opacity-30">
            
            <h2 className="text-xl font-semibold mb-4 text-center">Create Test</h2>

            
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Topic</label>
              <select className="w-full border border-gray-300 rounded-lg p-2" 
              value={Topic}   // controlled value
              onChange={(e) => setTopic(e.target.value)}>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
              </select>
            </div>

           
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Difficulty</label>
              <select className="w-full border border-gray-300 rounded-lg p-2"
              value={Level} 
              onChange={(e) => setLevel(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-orange-600"
                onClick={async () => {
                    try {
                        const token = localStorage.getItem("token");       
                        const res = await axios.post(
                          "http://localhost:3000/CreateQuiz",
                          { Topic, Level },
                          {
                            headers: { Authorization: `${token}` }
                          }
                        );
                        console.log("Response:", res.data);
                        setShowForm(false);
                        onUpdate();
                      } catch (err) {
                        console.error("Error:", err.response?.data || err.message);
                      }

                  
                }
            }
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
