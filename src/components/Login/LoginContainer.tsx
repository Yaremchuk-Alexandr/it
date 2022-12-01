export {}

// import { connect} from 'react-redux';
// import {userLoginThunk} from '../../redux/login-reducer';
// import {authMeThunk} from '../../redux/auth-reducer';
// import {setToggleFetching} from '../../redux/users-page-reducer';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
// import {  useNavigate } from 'react-router-dom';
// import React, {  useEffect } from 'react';
// import Login from './Login';
// import {AppStateType} from '../../redux/redux-store'


// const LoginContainer =(props:any):React.CElement<any, any> => {

    // const onSubmit =  async(formData:any) => {
      
    //    await props.userLoginThunk(formData)
    //     props.authMeThunk(props.email, props.login, props.isAuth)
    //     navigate('/profile') 
    // }

    // let navigate = useNavigate()
    // useEffect(() => {
    //     if (props.isAuth) {
    //         return navigate('/profile')
    //     }
    // }, [navigate, props.isAuth] ) 

    // return < Login/>
                    // userLoginThunk ={props.userLoginThunk}
                    // authMeThunk = {props.authMeThunk}
// }
// type mapStateToPropsType = {
    // isAuth: boolean |null| undefined
    // email: string |null
    // login: string |null
    // userId: number |null
// }
// const mapStateToProps = (state: AppStateType):mapStateToPropsType =>{

//     return {
//         isAuth: state.auth.isAuth,
//         email: state.auth.email,
//         login: state.auth.login,
//         userId: state.auth.userId
//     }
// }


// export default connect (mapStateToProps, { userLoginThunk, authMeThunk, setToggleFetching, withAuthRedirect })(LoginContainer)
// type LoginContainerThunksTypes={
//     userLoginThunk:(formData:any)=>void
//     authMeThunk:(email: string| null, login: string| null, isAuth: boolean|null|undefined) => Promise<void>
//     setToggleFetching:(isToggleFetching: boolean) => setToggleFetchingType
//     withAuthRedirect:()=>void
//     isFething: (isToggleFetching: boolean) => setToggleFetchingType
// }
// type OwnProps= {}
// type Props = LoginContainerThunksTypes & mapStateToPropsType & OwnProps

