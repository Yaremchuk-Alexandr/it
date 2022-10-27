import { ThunkAction } from 'redux-thunk';
import { userAPI } from "../api/api"
import { AppStateType } from './redux-store';

const LOGIN_USER ='LOGIN_USER'




const initialState = {
    
    user:{
        id:'',

    }
}
 type loginInitialState = typeof initialState

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
type addUserDataType ={
    type:typeof LOGIN_USER
    id:any 
}
export const addUserData =(id:string):addUserDataType=> ({type:LOGIN_USER, id})


export const userLoginThunk = (formData:any): ThunkAction<void, AppStateType, unknown, addUserDataType> => 
        (dispatch)=> {
        return  userAPI.getUserLogin( {...formData} )
            // dispatch(addUserData(addUserData))
}


export default UserLoginReducer