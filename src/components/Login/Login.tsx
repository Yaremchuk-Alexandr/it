// import { Field, Form, Formik, } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAPI } from "../../api/api";
import { setUserData, badResultCode } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';
import { Button, Checkbox, Divider, Form, Input, Row, message } from 'antd';
import classes from './login.module.css'
import { addUserData } from '../../redux/login-reducer';






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

const Login: React.FC = (props) => {
    let isAuth = useSelector ((state:AppStateType)=> state.auth.isAuth)
  let navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            return navigate('/profile/25930')
        }
    }, [navigate, isAuth])

    return (<div className={classes.wrapperLogin}>
        <Row className={classes.RowLogin} justify="center" align="middle"><div> <h2>Login</h2> </div></Row>
        <Divider />
        <LoginForm />
    </div>
    )
}



export default Login

/// FORMIK FORM 
const LoginForm = (props: any) => {

    const email = useSelector((state: AppStateType) => state.auth.email)
    const login = useSelector((state: AppStateType) => state.auth.login)
    const userId = useSelector((state: AppStateType) => state.auth.userId)
    const resultCode = useSelector((state: AppStateType) => state.auth.resultCode)
    const messages = useSelector((state: AppStateType) => state.auth.messages)
    


    const dispatch = useDispatch()

  


    const onFinish = async (values: any) => {
        await userAPI.getUserLogin({ ...values })
            dispatch(setUserData(userId, email, login, true, 0))
            userAPI.getauthMe()   
        if (resultCode === 0) {
            dispatch(addUserData({ ...values }))
            
            
        } 
        if (resultCode === 1) {
            dispatch(badResultCode(1, await message.warning([...messages])))
        }
    
    }
    

    return (
        <div className={classes.loginForm}>
{/* <Formik                                                                              for FOMIK
initialValues={{ email: '', password: '', rememberMe: false }}
onSubmit={async (values, { setSubmitting }) => {
    await (userAPI.getUserLogin({ ...values }))
    dispatch(setUserData(userId, email, login, true))
    setSubmitting(false);
    }
}
>
{({ isSubmitting }) => (
    <Form>
    <Field  className="site-form-item-icon" type="input" name="email"  placeholder='enter email' /> <br/>
    <Field  type="input" name="password" placeholder='enter password' /><br/>
        <Field type="checkbox" name="rememberMe" /><br />
    <Button type="primary" htmlType="submit" disabled={isSubmitting} >
            SEND
    </Button>
    </Form>
)}
</Formik> */}

        {/* Ant Design*/}
        <Form
            onFinish={onFinish}>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />

            </Form.Item>

            <Form.Item

                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password !',
                    },
                ]}
            >

                <Input.Password />
            </Form.Item>
            <Form.Item
                name="rememberMe"
                valuePropName="checked"
            >
                <Checkbox>
                    Remember Me
                </Checkbox>
            </Form.Item><Form.Item>
                <Button type="primary" htmlType="submit">
                    SEND
                </Button>
            </Form.Item>

        </Form>
    </div >
);
}


