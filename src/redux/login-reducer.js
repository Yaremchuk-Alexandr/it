import { userAPI } from "../api/api"

const LOGIN_USER ='LOGIN_USER'

const initialState= {
    user:{
        id:''
    }
}

const UserLoginReducer =(state= initialState, action)=>{
 switch(action.type){
    case LOGIN_USER:{
        return{ 
            ...state,
            id : action.id
        } 
    }
    default:
        return { ...state }
} 

}

export const addUserData =(id)=> ({type:LOGIN_USER, id})


export const userLoginThunk = (email, password, rememberMe)=> async(dispatch)=>{
        let responce = await userAPI.getUserLogin(email, password, rememberMe)
            dispatch(addUserData(addUserData))
}


export default UserLoginReducer