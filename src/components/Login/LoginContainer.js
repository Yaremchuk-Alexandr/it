import { connect } from 'react-redux';
import {userLoginThunk} from '../../redux/login-reducer.ts';
import {authMeThunk} from '../../redux/auth-reducer.ts';
import {setToggleFetching} from '../../redux/users-page-reducer.ts';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './Login';





const LoginContainer =(props) =>{




    const onSubmit = async (formData) => {
      
        navigate()
        await props.userLoginThunk(formData)
        props.authMeThunk()
    }

    let navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth) {
            return navigate('/profile')
        }
    }, [props.isAuth] ) 

    return (<Login userLoginThunk ={props.userLoginThunk}
                    authMeThunk={props.authMeThunk}
                    isFething ={props.setToggleFetching}
                    login={props.login} 
                    onSubmit={onSubmit}
    />)

}
const mapStateToProps = (state) =>{
    return {
        login:state.login.user,
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
        userId: state.auth.userId

    }
    
}


export default connect (mapStateToProps, {userLoginThunk, authMeThunk, setToggleFetching, withAuthRedirect })(LoginContainer)



