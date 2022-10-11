import React from "react";
import { addPost,getUserStatusThunk,updateMyStatusThunk, getMyStatusThunk} from "../../../redux/profile-page-reducer.ts";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = (state) => { 
    return {
        state: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        myStatus:state.profilePage.myStatus
    }
}
// const mapDispatchToProps = (dispatch) => {
   
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (text) => {
//             dispatch(onPostChangeActionCreator(text))
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, 
    {getUserStatusThunk,updateMyStatusThunk, getMyStatusThunk, addPost })(MyPosts)

export default MyPostsContainer;

