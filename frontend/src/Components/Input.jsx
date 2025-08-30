export default function Input({type,placeholder,onChange}){
    return (
        <div className="p-2">
            <input className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            type={type} placeholder={placeholder} onChange={onChange}></input>
        </div>
    )
}