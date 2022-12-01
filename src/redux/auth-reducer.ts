import { ThunkAction } from 'redux-thunk';
import { ResultCodesEnum, userAPI } from '../api/api';
import { AppStateType } from './redux-store';

const SET_AUTH = 'SET_AUTH';
const LOGOUT = 'LOGOUT'
const BAD_RESULT_CODE = 'BAD_RESULT_CODE'

const initialState: authInitialStateType = {
    email: null,
    login: null,
    userId: null,
    isAuth: null,
    isFething: false,
    resultCode: 0,
    messages: ['']
}

const authReducer = (state = initialState, action: ActionsTypes): authInitialStateType => {

    switch (action.type) {
        case SET_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGOUT: {
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        }
        case BAD_RESULT_CODE: {
            return {
                ...state,
                resultCode: action.resultCode,
                messages: action.messages,
                isAuth: false
            }
        }
        default:
            return { ...state }
    }
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean, resultCode: number): setUserDataType => ({ type: SET_AUTH, data: { userId, email, login, isAuth, resultCode } })
export const logOutMe = (userId: null, email: null, login: null): logOutMeType => ({ type: LOGOUT, data: { userId, email, login } })
export const badResultCode = (resultCode: number, messages: Array<String>): badResultCodeType => ({ type: BAD_RESULT_CODE, resultCode, messages })

export const authMeThunk = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> =>
    async (dispatch) => {
        let data = await userAPI.getauthMe()
        if (data.resultCode === ResultCodesEnum.Succes) {
            let { userId, email, login, resultCode } = data.data
            dispatch(setUserData(userId, email, login, true, 0))
        }
        if (data.resultCode === ResultCodesEnum.Error) {
            dispatch(badResultCode(data.resultCode, data.messages))
        }
    }

export const logOutMeThunk = (id: any, email: any, login: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
    let data = await userAPI.logOutMe()
    if (data.resultCode === ResultCodesEnum.Succes) {
        dispatch(logOutMe(null, null, null))
    }
}


export default authReducer

type authInitialStateType = {
    email: string | null
    login: string | null
    userId: number | null
    isAuth: boolean | null
    isFething: boolean
    resultCode: number
    messages: Array<String>
}
type ActionsTypes = setUserDataType | logOutMeType | badResultCodeType
export type setUserDataType = {
    type: typeof SET_AUTH
    data: { userId: number | null, email: string | null, login: string | null, isAuth: boolean, resultCode: number }
}
type logOutMeType = {
    type: typeof LOGOUT
    data: { userId: null, email: null, login: null }
}
type badResultCodeType = {
    type: typeof BAD_RESULT_CODE
    resultCode: number
    messages: Array<String>
}