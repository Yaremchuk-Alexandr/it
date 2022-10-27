import React from "react";
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

type propsType={
    isAuth:boolean
    login:string
    logOutMeThunk:(id: number | null, email: string | null, login: string | null)=> Promise<void>
}


const Header = (props:propsType) => {

    // const onHandleClick = () =>{
    //     props.logOutMeThunk()
    // }


    return <div  className={classes.header} >
                <img alt='' src='https://www.pngall.com/wp-content/uploads/10/Neo-Crypto-Logo-PNG-Pic.png'></img>
            {/* <div> */}
                <NavLink className={classes.login} to='/login'> 
                    {props.isAuth 
                        ? <>{props.login}  <button className={classes.logout} onClick={()=>props.logOutMeThunk(null, null , null)}>LOG OUT</button></>
                        : <button className={classes.logout} >LOG IN</button>
                    } 
                </NavLink> 
            {/* </div> */}
            </div>
}

export default Header