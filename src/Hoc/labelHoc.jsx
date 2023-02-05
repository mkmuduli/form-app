
const labelHoc = (WrappedComponent) => {
    return (props) => {
        const { label, errorMsg, ...rest } = props;
        return (
            <div className='field-box'>
                <label className="label-title" >{label}</label>
                <WrappedComponent {...rest} />
                {errorMsg ? <label className="label-error" >{errorMsg}</label> : null}
            </div>
        )
    }
}

export default labelHoc;