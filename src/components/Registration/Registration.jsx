import React, {useEffect} from 'react';
import s from '../common/FormControls/FormControls.module.css';
import {reduxForm} from "redux-form";
import {Input, CreateField} from "../common/FormControls/FormControls";
import {requiredField, numberField} from "../../utils/validators/validators";
import {connect} from "react-redux";
//import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/reduxstore";
import {compose} from "redux";
import {letRegistration} from "../../redux/authReducer";
import Preloader from "../Preloader/Preloader";
import {useMessage} from "../../hooks/messageHook";
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


const RegistrationForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Имя", 'name', [requiredField], Input, 'input')}
            {CreateField("Фамилия", 'surname', [requiredField], Input, "input",)}
            {CreateField("Название заказчика, если роль пользователя заказчик - иначе просто пустое поле",
                'name_customer', null, Input, 'input')}
            {CreateField("Email", 'email', [requiredField], Input, 'input')}
            {CreateField("Телефон", 'phone', [requiredField, numberField], Input, 'input')}
            {CreateField(null, 'role', null, Input, 'checkbox', 'checkbox', "я заказчик")}
            {CreateField("Пароль", 'password', [requiredField], Input, "password", "password")}
            {CreateField("Подтверждение пароля", 'password_confirmation', [requiredField], Input, "password", "password")}
            {error && <div className={s.formSummmayError}>
                {error}
            </div>}

            <div>
                <button>Зарегистрироваться</button>
            </div>
        </form>
    )
}
const RegistrationReduxForm = reduxForm({
    form: "registration"
})(RegistrationForm)

const Registration = (props) => {
    const onSubmit = (formData) => {
        if (formData.password !== formData.password_confirmation) alert("Пароль не совпадает")
        else {
            if (formData.role == true) formData.role = 2
            else if (!formData.role) formData.role = 1
            props.letRegistration(formData.name, formData.surname, formData.name_customer, formData.email,
                formData.phone, formData.role, formData.password, formData.password_confirmation)
        }
        console.log(formData)
    }
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const message = useMessage()
    useEffect(() => {
        message(props.error)
    }, [props.error, message])

    if (props.initialized==true) return (<Preloader/>)
    if (props.id !=null) {

        return <Redirect to='/login'/>
    } else return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Регистрация</h1>
                <RegistrationReduxForm onSubmit={onSubmit}/>

            </div>
        </div>

    )
}

//let LoginRedirectComponent = withAuthRedirect(Registration)
let mapStateToProps = (state) => ({
    id: state.auth.user.id,
    initialized: state.auth.initialized,
    error:state.auth
})
export default compose(connect(mapStateToProps, {letRegistration}))(Registration);