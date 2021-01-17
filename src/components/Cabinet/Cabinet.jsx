import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {edit, letLogin} from "../../redux/authReducer";
import React from "react";
import {CreateField, Input} from "../common/FormControls/FormControls";
import {oneOrTwoField, requiredField} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";

const EditCabinetForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("name", 'name', [], Input, 'input')}
            {CreateField("name_customer", 'name_customer', [], Input, "input")}
            {CreateField("surname", 'surname', [], Input, "input")}
            {CreateField("role", 'role', [oneOrTwoField], Input, "input")}
            <div>
                <button>Заменить поля</button>
            </div>
        </form>

    )
}
const EditCabinetReduxForm = reduxForm({form: "cabinet"})(EditCabinetForm)
const Cabinet = (props) => {
    const onSubmit = (formData) => {
        props.edit(formData.name, formData.name_customer, formData.surname, formData.role)
    }
   /* if (props.token !== null | props.token !== undefined) {
        return <Redirect to='/login'/>
    }*/
    return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>Заменить поля в профиле</h1>
                    <EditCabinetReduxForm onSubmit={onSubmit}/>
                    {/*<div>{props.token}</div>
                    <div>{props.name_customer}</div>
                    <div>{props.surname}</div>
                    <div>{props.role}</div>*/}
                </div>
            </div>

        )
}

let mapStateToProps = (state) => ({

    name: state.auth.user.name,
    name_customer: state.auth.user.name_customer,
    surname: state.auth.user.surname,
    role: state.auth.user.role,
    token: state.auth.token,
    initialized: state.auth.user.initialized,
})
export default compose(
    connect(mapStateToProps, {edit})
)(Cabinet);