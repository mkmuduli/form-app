import './Form.css'
import './Field.css';
import { fieldGeneration } from './Fields';
import { useForm } from '../hooks/useForm';

const Form = () => {
    const { fields, handelUpdate, errorMsgs } = useForm();

    return (
        <section className="form-container" >
            {fieldGeneration(fields, handelUpdate, errorMsgs)}
            <button className='submit-btn' >Submit</button>
        </section>
    )
}

export default Form;