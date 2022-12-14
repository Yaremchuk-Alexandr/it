import { ThunkAction } from 'redux-thunk';
import { userAPI } from "../api/api"
import { AppStateType } from './redux-store';

const LOGIN_USER ='LOGIN_USER'

const initialState = {
    user:{
        id:'',
    }
}

const UserLoginReducer =(state= initialState, action:addUserDataType):loginInitialState =>{
 switch(action.type){
    case LOGIN_USER:{
        return{ 
            ...state,
            ...action.id
        } 
    }
    default:
        return { ...state }
} 

}

export const addUserData =(id:any):addUserDataType=> ({type:LOGIN_USER, id})
export const userLoginThunk = (formData:any): ThunkAction<void, AppStateType, unknown, addUserDataType> => 
        (dispatch)=> {
            dispatch(addUserData(formData))
            return  userAPI.getUserLogin( {...formData} )
        }


export default UserLoginReducer

type loginInitialState = typeof initialState
type addUserDataType ={
    type:typeof LOGIN_USER
    id:any 
}