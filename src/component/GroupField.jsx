import { fieldGeneration } from "./Fields";

const GroupField = ({ value, onUpdate, errorMsgs }) => {
    return fieldGeneration(value, onUpdate, errorMsgs)
}

export default GroupField;