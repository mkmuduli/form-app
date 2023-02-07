import { useEffect, useState } from "react"
import sampleFormData from "../data";
import produce from "immer";
import { groupFieldValidator } from "../util/helper";

export const useForm = () => {
    const [fields, setField] = useState([]);
    const [errorMsgs, setErrorMsgs] = useState({});

    useEffect(() => {
        setField(sampleFormData);
    }, []);

    const handelUpdate = (index, value) => {
        
        const newFields = produce(fields, draft => {
            draft[index].value = value;
        });
        const filedId = newFields[index]?.uid;
        
        if (errorMsgs[filedId]) {
            if (newFields[index].data_type !== "group") {
                const newErrorMsgs = produce(errorMsgs, draft => {
                    delete draft[filedId];
                });
                setErrorMsgs(newErrorMsgs)
            }
            if (newFields[index].data_type === "group") {
                const err = groupFieldValidator(newFields[index]);
                const newErrorMsgs = produce(errorMsgs, draft => {
                    if (typeof err === "string" || Object.keys(err).length > 0) {
                        draft[filedId] = err;
                    } else {
                        delete draft[filedId];
                    }
                });
                setErrorMsgs(newErrorMsgs);
            }

        }
        setField(newFields);
    }

    const handelUpdateError = (err) => {
        setErrorMsgs(err);
    }

    return {
        fields, handelUpdate, handelUpdateError,
        errorMsgs,
    }
}