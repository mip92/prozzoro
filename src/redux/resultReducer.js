import {authAPI} from "../api/api";

import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./reduxstore";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_LOGIN_DATA = "auth/SET-LOGIN-DATA";
const IS_INITIALIZE = "auth/IS-INITIALIZE"
const SET_LOGOUT_DATA="auth/SET-LOGOUT-DATA"

let initialState = {

    searchResults: [
        {id: 1,
            name: 'Дизайн сайтв UI и UX',
            description: "Мы делаем разные класные штуки",
            hashtegs: ["#Landing-page","Логотип","Промо-сайт"],
            cost: "1800$",
            time: "1-2 месяца"
        },
        {id: 2,
            name: 'Верстка сайтов',
            description: "Мы вообще ребята",
            hashtegs: ["#Landing-page","Логотип","Промо-сайт"],
            cost: "2000$",
            time: "2 месяца"
        },
        {id: 3,
            name: 'Дизайн сайтов',
            description: "Быстро, качественно, не дорого",
            hashtegs: ["#Landing-page","Логотип","Промо-сайт"],
            cost: "7000$",
            time: "7 месяцев"
        },
        {id: 4,
            name: 'SPA приложение за 15 минут',
            description: "Рекламные компании говорят, а мы делаем",
            hashtegs: ["#Landing-page","Логотип","Промо-сайт"],
            cost: "3000$",
            time: "1 месяц"
        },
    ]
}

export const resultReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, user: action.user}

        case SET_LOGIN_DATA:
            return {...state, company: action.data.company, user: action.data.user, status: action.data.status, token: action.data.token}

        case SET_LOGOUT_DATA:
            return {state:initialState}
        case IS_INITIALIZE:
            return {...state, initialized: action.status}

        default:
            return state;
    }
}
