const DropDownField = () => {
    return (
        <select className="select-box">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
            <option value="Option length">Option that has too long of a value to fit</option>
        </select>
    )
}

export default DropDownField;