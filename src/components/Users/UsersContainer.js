import React from "react";
import { connect } from "react-redux";
import { unFollow, follow, setCurrentPage, setTotalUsersCount, setToggleFetching, getUsers, pageChanges, unfollowThunk, followThunk } from "../../redux/users-page-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";





class UsersAPI extends React.Component {

    
    componentDidMount() {
     
        this.props.getUsers(this.props.currentPage, this.props.pageSize) // используем санку

    }

    onPageChanges = (pageNumber) => {
        this.props.pageChanges(pageNumber, this.props.pageSize)  // используем санку
    } 

    

    render() {
        return (<>
            {this.props.isToggleFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                pagesCount={this.pagesCount}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
                setToggleFetching={this.props.setToggleFetching}
                unfollowThunk= {this.props.unfollowThunk}
                followThunk ={this.props.followThunk}
            />
        </>)
    }
}


const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isToggleFetching: state.usersPage.isToggleFetching

    }
}
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         unfollow: (id)=>{
//             dispatch (unFollowAC(id))
//         },
//         follow: (userId)=>{
//             dispatch (followAC(userId))
//         },
//         setUsers: (users) =>{
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage:(pageNumber) =>{
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount:(totalCount) =>{
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleFetching:(isToggleFetching) =>{
//             dispatch(setToggleFetchingAC(isToggleFetching))
//         }      
//     }



const UsersContainer = connect(mapStateToProps,
                             { unFollow, follow,  setCurrentPage, 
                               setTotalUsersCount, setToggleFetching, getUsers, pageChanges, 
                               unfollowThunk, followThunk })
                        (UsersAPI)

export default UsersContainer