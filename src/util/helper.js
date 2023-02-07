const URLRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

const isUrl = (value) => {
    if(!value) return true;
    return URLRegex.test(value);
}

const isRequired = (value) => {
    return !!value;
}

const isString = (value) => {
    if(!value) return true;
    return !parseInt(value, 10);
}

const isNumber = (value) => {
    if(!value) return true;
    return parseInt(value, 10);
}

const checkArray = (arr, count, validFn) => {
    // not a valid param
    if (!Array.isArray(arr) || count === undefined) return false;
    let isValid = true;
    let i = 0;
    while (i < count) {
        if (validFn && !validFn(arr[i])) isValid = false;
        if (!isValid) break;
        i++;
    }
    return isValid;
}

const groupRequiredCheck = (fields) => {
    let isValid = true;
    let i = 0;
    while (i < fields.length) {
        const eachField = fields[i];
        if (eachField.data_type === "group") {
            isValid = groupRequiredCheck(eachField.value);
        }
        else if (eachField?._metadata?.multiple) {
            isValid = checkArray(eachField.value, eachField.value.length, isRequired);
        } else {
            isValid = !!eachField.value;
        }
        if (!isValid) break;
        i++;
    }
    return isValid;
}

export const fieldValidator = (field, err = {}) => {
    if (field.data_type === "group") {
        const gpErr = groupFieldValidator(field);
        if (typeof gpErr === "string" || Object.keys(gpErr).length > 0) err[field.uid] = gpErr;
    } else if (field?._metadata?.multiple) {
        if (field?._metadata?.required && !checkArray(field.value, field.value.length, isRequired)) {
            err[field.uid] = "please fill all the field";
            return;
        }
        if (field.data_type === "number" && !checkArray(field.value, field.value.length, isNumber)) {
            err[field.uid] = "please enter all are valid number";
            return;
        }
        if (field?._metadata?.is_url && !checkArray(field.value, field.value.length, isUrl)) {
            err[field.uid] = "please enter all are valid Url";
            return;
        }
        if (field.data_type === "string" && !checkArray(field.value, field.value.length, isString)) {
            err[field.uid] = "please enter all are valid string";
            return;
        }

    } else {
        if (field?._metadata?.required && !field.value) {
            err[field.uid] = "please fill the field";
            return;
        }
        if (field.value && field.data_type === "number" && !parseInt(field.value, 10)) {
            err[field.uid] = "please enter a valid number";
            return;
        }
        if (field?._metadata?.is_url && !isUrl(field.value)) {
            err[field.uid] = "please enter a valid Url";
            return;
        }
        if (field.value && field.data_type === "string" && parseInt(field.value, 10)) {
            err[field.uid] = "please enter a valid string";
            return;
        }
    }
}

export const groupFieldValidator = (fields) => {
    if (fields?._metadata?.required && !groupRequiredCheck(fields.value)) {
        return "please fill all are field";
    }
    const err = formFieldValidator(fields.value, {});
    return err;
}

export const formFieldValidator = (fields, err = {}) => {
    fields.forEach(eachField => {
        fieldValidator(eachField, err);
    })
    return err;
}