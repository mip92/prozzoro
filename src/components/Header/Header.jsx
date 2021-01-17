import React from 'react';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import {compose} from "redux";
import {connect} from "react-redux";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import {letLogout} from "../../redux/authReducer";
import img from "../../asets/images/instami-avatarka-v-instagram-9.png"
import s from './Header.module.css';


class HeaderContainer extends React.Component {
    render() {
        {
            console.log(this.props)
        }
        return <Header {...this.props}/>
    }
}

class Header extends React.Component {

    componentDidMount = () => {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }
    logoutHandler = () => {
        debugger
        this.props.letLogout();
    }

    render() {
        /*debugger;
        if (this.props.location.pathname === "/registration" || this.props.location.pathname === "/login") {
            return (<></>)
        }
        else*/ return (

            <div>
                <ul id="dropdown1" className="dropdown-content">
                    {/*<li><a href="/cabinet">Личный кабинет</a></li>*/}
                    <li><a onClick={this.logoutHandler}>Выйти</a></li>
                    <li><NavLink to={'/cabinet'}>Личный кабинет</NavLink></li>
                </ul>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i
                                className="material-icons right"><img
                                className={s.error} src={img}/></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    token: state.auth.token
})
export default compose(
    connect(mapStateToProps, {letLogout}),
    withRouter,)(HeaderContainer);
