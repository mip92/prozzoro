import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {letLogin} from "../../redux/authReducer";
import {CreateField, Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

/*const Login = (props) => {
    return (
        <div>

        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Зайти на сайт</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="yellowInput"
                                    onClick={}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="yellowInput"
                                    onClick={console.log(1)}/>
                                <label htmlFor="email">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            /!*disabled={1}*!/
                            onClick={console.log(1)}>
                            Войти
                        </button>
                        <button className="btn grey lighten-1 black-text"
                                onClick={letLogin}
                                /!*disabled={1}*!/>
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})
export default compose(
    connect(mapStateToProps, {letLogin}))(Login);*/

const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", 'email', [requiredField], Input, 'input')}
            {CreateField("Password", 'password', [requiredField], Input, "password", "password")}
            <div>
                <button>Войти</button>
            </div>
        </form>

    )
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.letLogin(formData.email, formData.password)
    }
    if(props.initialized==true){return <Preloader/>}
    else if (props.token !== null & props.token !== undefined) {
        return <Redirect to='/profile'/>
    }
    else return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Войти на сайт</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>

    )
}

let mapStateToProps = (state) => ({
    token: state.auth.token,
    initialized: state.auth.initialized,
})
export default compose(
    connect(mapStateToProps, {letLogin})
)(Login);
