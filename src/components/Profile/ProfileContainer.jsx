import React from "react";
import Profile from "./profile";
import { connect } from "react-redux";
import { addPost, setProfile, getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk,updateMyStatusThunk, getMyStatusThunk } from "../../redux/profile-page-reducer";
import {setToggleFetching} from '../../redux/users-page-reducer'
import { useEffect  } from "react";
import {useParams} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from "redux";

let ProfileContainer = (props) => {

  let params = useParams()

  useEffect(() => {
    props.getUserProfileThunk(params.userId, setToggleFetching )
    props.getUserStatusThunk (params.userId)
    props.getMyStatusThunk(props.userId)
    
    
  //   props.setToggleFetching(true)
  //   axios.get( params.userId ? 'https://social-network.samuraijs.com/api/1.0/profile/'+params.userId : 'https://social-network.samuraijs.com/api/1.0/profile/'+ 2, {withCredentials:true})
  //   .then(response => {
  //       props.setToggleFetching(false)
  //       props.setProfile(response.data)
        
  //   }
  // )
  }, [params])    

  
  
  
  return ( <Profile 
                        {...props }
                        profile={props.profile}
                        status = {props.status}
                        updateStatus = { props.updateStatus}
                        getMyStatus= {props.getMyStatusThunk}
                  /> )
}

const mapStateToProps =(state) =>{
    return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myStatus:state.profilePage.myStatus
    
    }
  }

  export default compose(
    connect (mapStateToProps, 
      {addPost,  setProfile, setToggleFetching, 
        getUserProfileThunk, getUserStatusThunk, updateUserStatusThunk,
        updateMyStatusThunk, getMyStatusThunk}),
    // withAuthRedirect

    ) (ProfileContainer)

//   let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

//  ProfileContainer = connect (mapStateToProps, {addPost, onPostChange, setProfile, setToggleFetching, getUserProfileThunk})(AuthRedirectComponent)

// переделал в функциональную компоненту  с юз эфектом и юзпарам для работы  рот параметрами юзеров



// class ProfileContainer extends React.Component {

  
//   componentDidMount(){
//     debugger
//     this.props.setToggleFetching(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.id)
//     .then(response => {
//         this.props.setToggleFetching(false)
//         this.props.setProfile(response.data)
//     })      
//   }

//   render() {
//     return ( <Profile 
//                     {...this.props }
//                     profile={this.props.profile}

//               /> )
//   }
// }


// const mapStateToProps =(state) =>{
//   return {

//   profile: state.profilePage.profile
//   }
// }

// // const WithRouterUrlComponent = withRouter (ProfileContainer)


// // const WithRouteContainer = props.withRouter(ProfileContainer);
// // const whithUrlContainer = withRouter(ProfileContainer)
// export default ProfileContainer = connect (mapStateToProps, {addPost, onPostChange, setProfile, setToggleFetching})(ProfileContainer)
 