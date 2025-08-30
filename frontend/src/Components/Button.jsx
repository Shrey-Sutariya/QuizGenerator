export default function Button({lable,onClick}){
    return (
        <div className="m-1">
          <button onClick={onClick} className="bg-blue-950 rounded-2xl text-white w-full p-3"
          >{lable}</button>
            
        </div>
    )
}