import {authAPI} from "../api/api";

import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxstore";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_LOGIN_DATA = "auth/SET-LOGIN-DATA";
const IS_INITIALIZE = "auth/IS-INITIALIZE";
const SET_LOGOUT_DATA = "auth/SET-LOGOUT-DATA";
const PUSH_ERROR = "auth/PUSH-ERROR";

let initialState = {
    err:null,
    initialized: false,
    status: false,
    token: null,
    user: {
        id: null,
        name: null,
        name_customer: null,
        email: null,
        surname: null,
        phone: null,
        email_verified_at: null,
        role: null,
        admin: null,
        status: null,
        company_id: null,
        created_at: null,
        updated_at: null
    },
    company: [
        {
            id: null,
            name: null,
            name_en: null,
            code_edrpo: null,
            fax: null,
            type_customer_id: null,
            address: null,
            city: null,
            post_code: null,
            region_id: null,
            country: null,
            country_indentifier: null,
            type_id: null,
            site: null,
            parent_id: null,
            balance: null,
            druft_balance: null,
            status: null,
            created_at: null,
            updated_at: null,
            type_company: null,
            type_customer: {
                id: null,
                type: null,
                title: null,
                created_at: null,
                updated_at: null
            }
        }
    ]
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            debugger
            return {...state, user: action.user}

        case SET_LOGIN_DATA:
            localStorage.setItem("userData", JSON.stringify({user: action.data.user, token: action.data.token}))
            return {
                ...state,
                company: action.data.company,
                user: action.data.user,
                status: action.data.status,
                token: action.data.token
            }

        case SET_LOGOUT_DATA:
            localStorage.setItem("userData", JSON.stringify({user: null, token: null}))
            return {state: initialState}

        case IS_INITIALIZE:
            return {...state, initialized: action.status}

        case PUSH_ERROR:
            return {...state, err: action.error}


        default:
            return state;
    }
}

export const registerAC = (user) => {
    return {type: SET_USER_DATA, user}
};
export const loginAC = (data) => {
    return {type: SET_LOGIN_DATA, data}
};
export const logoutAC = () => {
    return {type: SET_LOGOUT_DATA}
};
export const isInitialized = (status) => {
    return {type: IS_INITIALIZE, status}
};
export const editAC = (data) => {
    return {type: IS_INITIALIZE, data}
};
export const error=(error) => {
    return {type: PUSH_ERROR, error}
};

export const letRegistration = (name, surname, name_customer, email,
                                phone, role, password, password_confirmation) => async (dispatch) => {
    dispatch(isInitialized(true))
    let data = await authAPI.regMe(name, surname, name_customer, email,
        phone, Number(role), password, password_confirmation);
   /* if (data.status === 402) {
        dispatch(error(data.message))
    }*/
    debugger
    dispatch(isInitialized(false));
    dispatch(registerAC(data.data.user));
    //dispatch(isInitialized(false));
};
export const letLogin = (email, password) => async (dispatch) => {
    dispatch(isInitialized(true))
    let data = await authAPI.login(email, password);
    if (data.status === 200) {
        dispatch(loginAC(data.data))
    }
    dispatch(isInitialized(false));
};
export const letLogout = () => async (dispatch, getState) => {
    const state = getState();
    let data = await authAPI.logout(state.auth.token);
    if (data.status === 200) dispatch(logoutAC())
};
export const edit = (name, name_customer, surname, role) => async (dispatch, getState) => {
    debugger
    let state=getState();
    debugger
    console.log(state.user);
    if (name == undefined) name = state.auth.user.name;
    else if (surname == undefined) surname = state.auth.user.surname;
    else if (name_customer == undefined) name_customer = state.auth.user.name_customer;
    else if (role == undefined) role = state.auth.user.role;
    let data = await authAPI.edit(state.auth.token, name, surname, name_customer, role);
    if (data.status === 200) dispatch(registerAC(data.data.user))
};


