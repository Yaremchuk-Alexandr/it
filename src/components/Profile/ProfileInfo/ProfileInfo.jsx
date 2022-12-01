import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import classes from '../ProfileInfo/ProfileInfo.module.css';
import photosUserDefault from '../../../img/userLogo.png';
import { useState } from "react";
import {Row, Col} from 'antd'

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader />
    }

    return (<>
        <div>
            <Row> 
                <Col  flex='auto' > <img alt='' className={classes.profileImg} src='https://kartinkin.net/pics/uploads/posts/2022-08/thumbs/1659685186_6-kartinkin-net-p-zheltaya-abstraktsiya-geometriya-krasivo-6.jpg' /> 
                </Col>
            </Row>

        </div>
        <div className={classes.usersProfile} >
            <div className={classes.userProfImage}>
                <img  className={classes.profileUserPhoto} alt='' src={props.profile.photos.large != null ? props.profile.photos.large : photosUserDefault}  />
                <div className={classes.myStatus}>  User status :{props.status} </div>
            </div>
            <div className={classes.usersInfo} >
                <div className={classes.fullName}>  {props.profile.fullName}</div>
                <div className={classes.aboutMe}> About me : {props.profile.aboutMe ? props.profile.aboutMe : null}  </div>
                <div className={classes.lookingForAJob}> LookingForAJobDescription: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : null} </div>

            
            <div> <h3> Contacts: </h3>
                <div className={classes.usersContact}>{props.profile.contacts.facebook}</div>
                <div className={classes.usersContact}>{props.profile.contacts.website}</div>
                <div className={classes.usersContact}>{props.profile.contacts.vk}</div>
                <div className={classes.usersContact}>{props.profile.contacts.twitter}</div>
                <div className={classes.usersContact}>{props.profile.contacts.instagram}</div>
                <div className={classes.usersContact}>{props.profile.contacts.github}</div>
                <div className={classes.usersContact}>{props.profile.contacts.mainLink}</div>
            </div>
            </div>
        </div>



    </>
    )
}

export default ProfileInfo;