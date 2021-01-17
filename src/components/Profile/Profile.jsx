import Preloader from "../Preloader/Preloader";
import {NavLink, Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {letLogin} from "../../redux/authReducer";
import React from "react";
import Filter from "../Site/Filter/Filter";
import s from "./Profile.module.css"
import Finded from "../Site/Finded/Finded";
import Сategories from "../Site/Сategories/Сategories";
import Cost from "../Site/Cost/Cost";
import Results from "../Site/Results/Results";
import Paginator from "../Site/Paginator/Paginator";

const Profile = (props) => {
    debugger
    if (props.initialized == true) {
        return <Preloader/>
    }
    if (props.token == null) {
        return <Redirect to='/login'/>
    } else return (<div>
            <div className={s.name}>site name</div>
            <div className={s.gridContainer}>
                <div className={s.post1}><Filter/></div>
                <div className={s.post2}><Finded/></div>
                <div className={s.post3}><Сategories/></div>
                <div className={s.post4}><Results searchResults={props.searchResults}/></div>
                <div className={s.post5}><Cost/></div>
                <div className={s.post7}><Paginator/></div>
                <div className={s.post6}></div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    searchResults: state.result.searchResults,
    token: state.auth.token,
    initialized: state.auth.initialized,
})
export default compose(
    connect(mapStateToProps, {})
)(Profile);