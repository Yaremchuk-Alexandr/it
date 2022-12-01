import { AppStateType } from '../../redux/redux-store';
import React, {  } from "react";
import { connect } from "react-redux";
import { setUserData, authMeThunk} from "../../redux/auth-reducer";
import {setToggleFetching} from '../../redux/users-page-reducer'
import { useEffect } from "react";
import { userLoginThunk } from '../../redux/login-reducer';
import {logOutMeThunk} from '../../redux/auth-reducer'
import Header from './Header';




const  HeaderContainerAPI= (props:any):React.CElement<any, any> =>  {
    
useEffect(()=>{
    
    props.authMeThunk(props.email, props.login, props.isAuth)
    // props.userLoginThunk(null)
   
}, [props])
 
    return  < Header {...props}
                    // userLoginThunk ={props.userLoginThunk}
                    logOutMeThunk= {props.logOutMeThunk}
                    />
                    
}

const mapStateToProps = (state:AppStateType) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email
    }
}
// type HeaderContainerThunksTypes = {
//         userLoginThunk:(formData:{id: number|null, email:string |null, login: string| null} )=>void
//         setUserData:(userId: number , email: string  , login: string , isAuth: boolean  ) => setUserDataType
//         setToggleFetching:(isToggleFetching: boolean )=>void
//         authMeThunk:(email: string |null, login: string |null, isAuth: boolean |null  ) => Promise<void>
//         logOutMeThunk:(id: number |null, email: string | null, login: string| null ) => Promise<void>
// }

// type HeaderContainerStateTypes = {
//     isAuth: boolean |null
//     login : string | null
//     email: string | null

// }

const HeaderContainer = connect ( mapStateToProps, { setUserData, setToggleFetching, authMeThunk, userLoginThunk, logOutMeThunk})(HeaderContainerAPI)
// type PropsFromRedux = ConnectedProps <AppStateType & HeaderContainerThunksTypes>
export default HeaderContainer