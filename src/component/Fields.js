
import labelHoc from '../Hoc/labelHoc'
import InputField from './InputField';
import DropDownField from './DropDown';
import MultipleField from './MultipleField';

export const Input = labelHoc(InputField);
export const DropDown = labelHoc(DropDownField);
export const Multiple = labelHoc(MultipleField,{hasSort:true});