import React from "react";
import { Field, reduxForm } from 'redux-form';
import classes from './login.module.css'
import { requered, maxLengthCreator } from "../../utils/Validators/validate";
import { Element } from "../../common/Preloader/FormControls/FormControl";


const maxLenth30 = maxLengthCreator(30)

const LoginForm = (props) => {

    return (<>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} placeholder={'Login'} component={Element} elementtype={'input'}  validate={[requered, maxLenth30]}/>
            </div>
            <div>
                <Field name={'password'} placeholder={'Password'} component={Element} elementtype={'input'} validate={[requered, maxLenth30]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}  /> remember me
            </div>
            <div>
                <button className={classes.login} >  LOGIN </button>
            </div>
        </form>
    </>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    return (<div>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={props.onSubmit}
            userLoginThunk={props.userLoginThunk}     
            authMeThunk={props.authMeThunk} 
        />
    </div>
    )
}

export default Login