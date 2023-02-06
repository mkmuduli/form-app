import DropDownField from "./DropDown";
import InputField from "./InputField";
import produce from 'immer';

const MultipleField = ({ fieldType, value, options, onUpdate }) => {

    const handelUpdate = (index, val) => {
        onUpdate(produce(value, draft => {
            draft[index] = val;
        }))
    }

    const addNewValue = (index) => {
        onUpdate(produce(value, draft => {
            draft.splice(index + 1, 0, '');
        }))
    }

    const removeValue = (index) => {
        onUpdate(produce(value, draft => {
            draft.splice(index, 1);
        }))
    }

    const sortValue = (isAsc) => {
        onUpdate(produce(value, draft => {
            draft.sort((a, b) => {
                if (isAsc) return a > b ? 1 : a < b ? -1 : 0;
                else return b > a ? 1 : b < a ? -1 : 0;
            })
        }));
    }

    return (
        <>
            <div className="sort-box" >
                <span className="sort-heading" >Sort</span>
                <button onClick={() => sortValue(true)} className="icon-btn"><i className="fa fa-arrow-up"></i></button>
                <button onClick={() => sortValue()} className="icon-btn"><i className="fa fa-arrow-down"></i></button>
            </div>
            {value.map((eachValue, index) => {
                return (
                    <div className="multiple-box" key={index} >
                        {fieldType === "dropdown" && options ? (
                            <DropDownField
                                value={eachValue}
                                options={options}
                                onUpdate={(val) => handelUpdate(index, val)}
                            />
                        ) : (
                            <InputField
                                value={eachValue}
                                onUpdate={(val) => handelUpdate(index, val)}
                            />
                        )}
                        {value.length !== 1 ? <button onClick={() => removeValue(index)} className="icon-btn"><i className="fa fa-trash"></i></button> : null}
                        <button onClick={() => addNewValue(index)} className="icon-btn"><i className="fa fa-plus"></i></button>
                    </div>
                )
            })}
        </>
    )
}

export default MultipleField;