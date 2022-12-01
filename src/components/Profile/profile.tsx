import React from "react";
import '../Profile/Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props: any) => {

  return (
    <div >
      <ProfileInfo profile={props.profile}
        status={props.status}
      />
      <MyPostsContainer updateStatus={props.updateStatus}
        myStatus={props.myStatus}
        getMyStatus={props.getMyStatusThunk}
      />
    </div>
  )
}


export default Profile

  // let navigate = useNavigate()

  // useEffect(() => {
  //     if (!props.isAuth ) {
  //       return navigate ('/login')
  //     }
  // },[props.isAuth]);