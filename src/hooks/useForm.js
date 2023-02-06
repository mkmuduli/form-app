import { useEffect, useState } from "react"
import sampleFormData from "../data";
import produce from "immer";

export const useForm = () => {
    const [fields, setField] = useState([]);
    const [errorMsgs, setErrorMsgs] = useState({});

    useEffect(() => {
        setField(sampleFormData);
    },[]);

    const handelUpdate = (index, value) => {
        const filedId = fields[index]?.uid;
        if(errorMsgs[filedId] && fields[index].data_type !== "group"){
            const newErrorMsgs = produce(errorMsgs, draft => {
                delete draft[filedId] ;
            });
            setErrorMsgs(newErrorMsgs)
        }
        const newState = produce(fields, draft => {
            draft[index].value = value;
        });
        setField(newState);
    }

    return {
        fields, handelUpdate,
        errorMsgs,
    }
}