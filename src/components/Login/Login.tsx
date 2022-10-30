import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAPI } from "../../api/api";
import { authMeThunk, setUserData } from '../../redux/auth-reducer';
import { userLoginThunk } from '../../redux/login-reducer';
import { AppStateType } from '../../redux/redux-store';



// const maxLenth30 = maxLengthCreator(30)

// const LoginForm = (props: { handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined; }) => {


//     return (<>
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name={'email'} placeholder={'Login'} component={Element} elementtype={'input'}  validate={[requered, maxLenth30]}/>
//             </div>
//             <div>
//                 <Field name={'password'} placeholder={'Password'} component={Element} elementtype={'input'} validate={[requered, maxLenth30]}/>
//             </div>
//             <div>
//                 <Field name={'rememberMe'} component={'input'} type={'checkbox'}  /> remember me
//             </div>
//             <div>
//                 <button className={classes.login} >  LOGIN </button>
//             </div>
//         </form>
//     </>
//     )
// }

// const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)



const Login = (props: { userLoginThunk: (arg0: any) => any; authMeThunk: (arg0: string | null, arg1: string | null, arg2: boolean | null) => void; }) => {

    const isAuth = useSelector((state:AppStateType)=> state.auth.isAuth)
  

    let navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            return navigate('/profile')
        }
    }, [navigate, isAuth] ) 

 

    return (<div>
        <h2>Login</h2>
        <LoginForm  
                    userLoginThunk ={props.userLoginThunk}
                    authMeThunk = {props.authMeThunk}      
                    />
            </div>
    )
}

const mapStateToProps = (state: AppStateType) => { }
export const LoginConnect = connect(mapStateToProps, { authMeThunk, userLoginThunk })(Login)
export default Login

/// FORMIK FORM 
const LoginForm = (props:any) => {

    const dispatch = useDispatch()

  
    const email = useSelector((state:AppStateType)=> state.auth.email)
    const login = useSelector((state:AppStateType)=> state.auth.login)
    const userId = useSelector((state:AppStateType)=> state.auth.userId)

    return (

        <div>
            <Formik
                initialValues={{ email: '', password: '', rememberMe: false }}
                onSubmit={async(values, { setSubmitting }) => {
                 await (userAPI.getUserLogin({ ...values }))
                    dispatch(setUserData(userId, email, login, true))
                    setSubmitting(false);
                 
                    }
                
                }
                
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="input" name="email" placeholder='email' /> <br />
                        <Field type="input" name="password" placeholder='password' /><br />
                        <Field type="checkbox" name="rememberMe" /><br />
                        <button type="submit" disabled={isSubmitting} >
                            SEND
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}


// function useLoginThunk(formData: any): any {
//     throw new Error("Function not implemented.");
// }
