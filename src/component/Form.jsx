import './Form.css'
import './Field.css'
import labelHoc from '../Hoc/labelHoc';
import GroupField from './GroupField';
import { Input, DropDown, Multiple } from './Fields';

const Group = labelHoc(GroupField);


const Form = () => {
    return (
        <section className="form-container" >
            <Input label="FirstName" errorMsg="Input text is not a valid string" />
            <DropDown label="FirstName" errorMsg="Input text is not a valid string" />
            <Multiple label="Multiple Field" errorMsg="Input text is not a valid string" />
            <Group label="Group Field" />
            <button className='submit-btn' >Submit</button>
        </section>
    )
}

export default Form;