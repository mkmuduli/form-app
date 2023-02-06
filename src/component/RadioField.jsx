
const RadioItem = ({ itemId, label }) => {
    return (
        <div className="radio-box-item" >
            <input type="radio" id={itemId} />
            <label htmlFor={itemId} >{label}</label>
        </div>
    )
}

const RadioField = () => {
    return (
        <div className="radio-box" >
            <RadioItem itemId="abc" label={"Javascript"} />
            <RadioItem itemId="abc1" label={"Typescript"} />
        </div>
    )
}

export default RadioField;