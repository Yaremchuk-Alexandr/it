import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, authMeThunk } from "../../redux/auth-reducer.ts";
import {setToggleFetching} from '../../redux/users-page-reducer.ts'
import { useEffect } from "react";
import {userLoginThunk} from '../../redux/login-reducer.ts'
import {logOutMeThunk} from '../../redux/auth-reducer.ts'





let HeaderContainerAPI = (props) => {
    
// useEffect(()=>{
    
//     props.authMeThunk(setToggleFetching)
//     props.userLoginThunk(null, null, null)
   
// }, [props])

    return < Header {...props}
                    userLoginThunk ={props.userLoginThunk}/>
}

const mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect ( mapStateToProps, { setUserData, setToggleFetching, authMeThunk, userLoginThunk, logOutMeThunk})(HeaderContainerAPI)

export default HeaderContainer