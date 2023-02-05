
const RadioItem = ({ itemId, label }) => {
    return (
        <div className="radio-box-item" >
            <input type="checkbox" id={itemId} />
            <label htmlFor={itemId} >{label}</label>
        </div>
    )
}

const RadioField = () => {
    return (
        <>
            <RadioItem itemId="abc" label={"Javascript"} />
            <RadioItem itemId="abc1" label={"Typescript"} />
        </>
    )
}

export default RadioField;