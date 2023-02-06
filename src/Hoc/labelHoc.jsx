
const labelHoc = (WrappedComponent,data={}) => {
    return (props) => {
        const { label, errorMsg, ...rest } = props;
        const {className=''} = data;
        return (
            <div className={`field-box ${className}`}>
                {label ? <label className="label-title" >{label}</label> : null}
                <WrappedComponent {...rest} />
                {errorMsg && typeof errorMsg === "string" ? <label className="label-error" >{errorMsg}</label> : null}
            </div>
        )
    }
}

export default labelHoc;