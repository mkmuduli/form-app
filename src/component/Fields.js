
import React from 'react';
import labelHoc from '../Hoc/labelHoc';
import InputField from './InputField';
import DropDownField from './DropDown';
import MultipleField from './MultipleField';
import GroupField from './GroupField';
import produce from 'immer';

export const Input = React.memo(labelHoc(InputField));
export const DropDown = React.memo(labelHoc(DropDownField));
export const Multiple = React.memo(labelHoc(MultipleField, { hasSort: true }));

const Group = React.memo(labelHoc(GroupField, {className: "group-field"}));

export const fieldGeneration = (fields, handelUpdate, errorMsgs = {}) => {
    return fields.map((eachField, index) => {
        if (eachField.data_type === "group") {
            return <Group
                key={eachField.uid}
                label={eachField.label}
                value={eachField.value}
                onUpdate={(i, val) => {
                    handelUpdate(index, produce(eachField.value, draft => {
                        draft[i].value = val;
                    }));
                }}
                errorMsgs={errorMsgs[eachField.uid]}
                errorMsg={errorMsgs[eachField.uid]} />
        }

        if (['string', 'number'].includes(eachField.data_type)) {
            if (eachField?._metadata?.multiple) {
                return <Multiple
                    key={eachField.uid}
                    fieldType={eachField?._metadata?.field_type}
                    label={eachField.label}
                    value={eachField.value}
                    options={eachField?._metadata?.options}
                    onUpdate={(val) => handelUpdate(index, val)}
                    errorMsg={errorMsgs[eachField.uid]} />
            }
            if (eachField?._metadata?.field_type === "dropdown" && eachField?._metadata?.options) {
                return (
                    <DropDown
                        key={eachField.uid}
                        label={eachField.label}
                        value={eachField.value}
                        options={eachField?._metadata?.options}
                        onUpdate={(val) => handelUpdate(index, val)}
                        errorMsg={errorMsgs[eachField.uid]} />
                )
            }
            return (
                <Input
                    key={eachField.uid}
                    label={eachField.label}
                    value={eachField.value}
                    onUpdate={(val) => handelUpdate(index, val)}
                    errorMsg={errorMsgs[eachField.uid]} />
            )
        }
    })
}


export const validator = () =>{}