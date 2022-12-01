import React from "react";
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { Button, Col, Row } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

type propsType = {
    isAuth: boolean
    login: string
    logOutMeThunk: (id: number | null, email: string | null, login: string | null) => Promise<void>
}


const Header = (props: propsType) => {

    // const onHandleClick = () =>{
    //     props.logOutMeThunk()
    // }


    return (<>
        <Row align="middle"   className={classes.header}>
            <Col  xl={19} lg={14}  md={9} sm={6} xs={4} >
                <img alt='' src='https://www.pngall.com/wp-content/uploads/10/Neo-Crypto-Logo-PNG-Pic.png'></img>
            </Col>
            <Col   xl={5} lg={10}  md={15} sm={18}  xs={20}  >
                <NavLink className={classes.login} to='/login'>
                    {props.isAuth
                        ? <><div  style={{ marginRight: "30px" }}>{props.login} </div> <Button type="primary" icon={<LogoutOutlined />} className={classes.logout} onClick={() => props.logOutMeThunk(null, null, null)}>LOG OUT</Button>  </>
                        : <Button className={classes.logout} type="primary" icon={<LoginOutlined />}>LOG IN</Button>
                    }
                </NavLink>
            </Col>
        </Row>

    </>
    )
}

export default Header