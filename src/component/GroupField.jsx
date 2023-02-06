import { Input, DropDown, Multiple } from './Fields';

const GroupField = () => {
    return (
        <>
            <Input label="FirstName" errorMsg="Input text is not a valid string" />
            <DropDown label="FirstName" errorMsg="Input text is not a valid string" />
            <Multiple label="Multiple Field" errorMsg="Input text is not a valid string" />
        </>
    )
}

export default GroupField;