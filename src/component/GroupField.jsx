import { fieldGeneration } from '../util/Fields';

const GroupField = ({ value, onUpdate, errorMsgs }) => {
    return fieldGeneration(value, onUpdate, errorMsgs)
}

export default GroupField;