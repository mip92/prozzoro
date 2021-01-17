import React from "react";
import s from './FormControls.module.css';
//import {FieldValidatorType, requiredField} from "../../../utils/validators/validators";
import {Field/*, WrappedFieldMetaProps, WrappedFieldProps*/} from "redux-form";


const Textarea =(props)=>{
    const {input, meta: {touched, error}, hasError= touched && error}=props;
    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError ? s.formControlError : ""}/>
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    )
}

const Input =(props)=>{
    const {input, meta: {touched, error}, hasError= touched && error}=props;
        return (
            <div>
                <div>
                    <input {...input} {...props} className={hasError ? s.formControlError : ""}/>
                </div>
                {hasError && <span className={s.error}>{error}</span>}
            </div>
        )

    }

function CreateField (placeholder,
                     name,
                     validate,
                     component,
                     props,
                     type,
                     text = ""){
    return (
        <div>
            <Field placeholder={placeholder ? placeholder : ''}
                   component={component}
                   name={name}
                   validate={validate}
                   type={type}
            />{text}
        </div>
    )
}


export {Textarea, Input, CreateField}

