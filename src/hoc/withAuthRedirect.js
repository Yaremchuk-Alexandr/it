import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'

let mapStateToPropsForRedirect = (state) =>({
    isAuth: state.auth.isAuth
})


export let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        let navigate = useNavigate()
        useEffect(() => {
            if (!props.isAuth) {
                return navigate('/login')
            }
        }, [props.isAuth] ) 

        return <Component {...props} />
    } 

let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent)

return ConnectedAuthRedirectComponent

}