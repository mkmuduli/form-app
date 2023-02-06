const InputField = ({ className}) => {
    return (
        <input className={`${className||''} input-text-field`} type="text" />
    )
}

export default InputField;