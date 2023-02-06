const DropDownField = ({value, options, onUpdate}) => {

    const handleChange = (e) => {
        onUpdate(e.target.value)
    }
    return (
        <select className="select-box" onChange={handleChange} value={value} >
            <option value="">Select</option>
            {options.map((eachOption, index) => {
                return <option key={index} value={eachOption}>{eachOption}</option>
            })}
        </select>
    )
}

export default DropDownField;