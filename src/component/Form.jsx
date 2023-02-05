import './Form.css'
import './Field.css'
import labelHoc from '../Hoc/labelHoc'
import InputField from './InputField';
import RadioField from './RadioField';
import DropDownField from './DropDown';
import MultipleField from './MultipleField';

const Input = labelHoc(InputField);
const Radio = labelHoc(RadioField);
const DropDown = labelHoc(DropDownField);
const Multiple = labelHoc(MultipleField);

const Form = () => {
    return (
        <section className="form-container" >
            <Input label="FirstName" errorMsg="Input text is not a valid string" />
            <Radio label="FirstName" errorMsg="Input text is not a valid string" />
            <DropDown label="FirstName" errorMsg="Input text is not a valid string" />
            <Multiple label="FirstName" errorMsg="Input text is not a valid string"/>
        </section>
    )
}

export default Form;