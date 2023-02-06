const InputField = ({ className, value, onUpdate}) => {

    const handleChange = (e) =>{
        onUpdate(e.target.value)
    } 

    return (
        <input className={`${className||''} input-text-field`} type="text" value={value} onChange={handleChange} />
    )
}

export default InputField;