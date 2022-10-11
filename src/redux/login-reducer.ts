import { userAPI } from "../api/api"

const LOGIN_USER:string ='LOGIN_USER'

type userType={
    id:string
}
type loginInitialState = {
    user: userType
}
const initialState: loginInitialState = {
    user:{
        id:''
    }
}

const UserLoginReducer =(state= initialState, action: any)=>{
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

export const addUserData =(id:any)=> ({type:LOGIN_USER, id})


export const userLoginThunk = (email:any, password:any, rememberMe:any)=> async(dispatch:any)=>{
        let responce = await userAPI.getUserLogin(email, password, rememberMe )
            dispatch(addUserData(addUserData))
}


export default UserLoginReducer