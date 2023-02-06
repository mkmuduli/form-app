// import DropDownField from "./DropDown";
import InputField from "./InputField";

const MultipleField = () =>{
    return(
        <>  
            <div className="sort-box" >
                <span className="sort-heading" >Sort</span>
                <button className="icon-btn"><i className="fa fa-arrow-up"></i></button>
                <button className="icon-btn"><i className="fa fa-arrow-down"></i></button>
            </div>
            <div className="multiple-box" >
                <InputField /> 
                <button className="icon-btn"><i className="fa fa-trash"></i></button>
                <button className="icon-btn"><i className="fa fa-plus"></i></button>
            </div>

            <div className="multiple-box" >
                <InputField /> 
                <button className="icon-btn"><i className="fa fa-trash"></i></button>
                <button className="icon-btn"><i className="fa fa-plus"></i></button>
            </div>
            <div className="multiple-box" >
                <InputField /> 
                <button className="icon-btn"><i className="fa fa-trash"></i></button>
                <button className="icon-btn"><i className="fa fa-plus"></i></button>
            </div>
        </>
    )
}

export default MultipleField;