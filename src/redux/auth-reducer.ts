import { ThunkAction } from 'redux-thunk';
import { ResultCodesEnum, userAPI } from '../api/api';
import { AppStateType } from './redux-store';

const SET_AUTH = 'SET_AUTH';
const LOGOUT ='LOGOUT'


type authInitialStateType = {
    email:string | null
    login:string | null
    userId: number | null
    isAuth: boolean |null
    isFething: boolean
}
const initialState: authInitialStateType = {
    email: null,
    login: null,
    userId: null,
    isAuth: null,
    isFething: false,
  

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
        case LOGOUT:{
            return {
                ...state,
                ...action.data,
                isAuth:false    
            }
        }
        default:
            return { ...state }
    }
}
type ActionsTypes = setUserDataType| logOutMeType
export type setUserDataType ={
    type: typeof SET_AUTH
    data: { userId: number| null, email: string| null, login: string | null, isAuth: boolean}
}
type logOutMeType = {
    type: typeof LOGOUT
    data:{userId:null, email:null, login: null}
}

export const setUserData = (userId: number |null, email: string | null, login: string | null, isAuth: boolean):setUserDataType => ({ type: SET_AUTH, data: { userId, email, login, isAuth } })
export const logOutMe = (userId:  null, email: null, login: null):logOutMeType => ({ type: LOGOUT, data: { userId, email, login} })

export const authMeThunk = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => 
        async (dispatch) => {
         let data = await userAPI.getauthMe()              
        if (data.resultCode === ResultCodesEnum.Succes) {
            let { userId, email, login } = data.data
            dispatch(setUserData(userId, email, login, true))
        }
}   

export const logOutMeThunk = (id: any, email: any, login: any): ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => async (dispatch) => {
        let data = await userAPI.logOutMe()
        if (data.resultCode === ResultCodesEnum.Succes) {
            dispatch(logOutMe(null, null, null))
        }
    }


    export default authReducer