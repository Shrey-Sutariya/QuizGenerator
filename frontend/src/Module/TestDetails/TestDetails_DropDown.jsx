export default function DropDown({testinfo}){
    return (
        <div className="max-h-[50vh] overflow-y-auto p-4 border rounded-lg bg-blue-200">
            <div>
                <h3>Test Number : {testinfo.TestNumber}</h3>
                <h3>Topic : {testinfo.Topic}</h3>
                <h3>Level : {testinfo.Difficulty}</h3>
            </div>
        </div>
    )
}