import { userAPI } from '../api/api';

const SET_AUTH:string = 'SET_AUTH';
const LOGOUT:string ='LOGOUT'


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

const authReducer = (state = initialState, action) => {

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


export const setUserData = (userId, email, login, isAuth) => ({ type: SET_AUTH, data: { userId, email, login, isAuth } })
export const logOutMe = (userId, email, login) => ({ type: LOGOUT, data: { userId, email, login} })

export const authMeThunk = () => async (dispatch) => {
         let data = await userAPI.getauthMe()              
        if (data.resultCode === 0) {
            let { userId, email, login } = data.data
            dispatch(setUserData(userId, email, login, true))
        }
}   

export const logOutMeThunk = (id, email, login) => async (dispatch) => {
        let data = await userAPI.logOutMe()
        if (data.resultCode === 0) {
            dispatch(logOutMe(null, null, null))
        }
    }


    export default authReducer