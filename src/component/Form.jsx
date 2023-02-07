import './Form.css'
import './Field.css';
import { fieldGeneration } from '../util/Fields';
import { useForm } from '../hooks/useForm';
import { formFieldValidator } from '../util/helper';

const Form = () => {
    const { fields, handelUpdate, errorMsgs, handelUpdateError } = useForm();

    const handleSubmit = () => {
        const err = formFieldValidator(fields, {});
        handelUpdateError(err);
        if (Object.keys(err).length === 0) {
            alert("submitted");
            console.log(fields);
        }
    }

    return (
        <section className="form-container" >
            {fieldGeneration(fields, handelUpdate, errorMsgs)}
            <button onClick={handleSubmit} className='submit-btn' >Submit</button>
        </section>
    )
}

export default Form;