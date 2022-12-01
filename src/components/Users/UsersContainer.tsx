import React from "react";
import { connect } from "react-redux";
import { unFollow, follow, setCurrentPage, setTotalUsersCount, setToggleFetching, getUsers, pageChanges, unfollowThunk, followThunk, userType, findUsersThunk } from "../../redux/users-page-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { AppStateType } from "../../redux/redux-store";

class UsersAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize) // используем санк
    }

    onPageChanges = (pageNumber:number) => {
        this.props.pageChanges(pageNumber, this.props.pageSize)  // используем санку
    } 

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any, ): void {
        if(this.props.term !== prevProps.term){
        this.props.findUsersThunk(this.props.term, this.props.friend)
        }
    }

    render() {
        return (<>
            {this.props.isToggleFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                findUsersThunk ={this.props.findUsersThunk}
                currentPage={this.props.currentPage}
                onPageChanges={this.onPageChanges}
                setToggleFetching={this.props.setToggleFetching}
                unfollowThunk= {this.props.unfollowThunk}
                followThunk ={this.props.followThunk}
                setCurrentPage={this.props.setCurrentPage}
            />
        </>)
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isToggleFetching: state.usersPage.isToggleFetching
    }
}

const UsersContainer = connect(mapStateToProps,
                             { unFollow, follow,  setCurrentPage, 
                               setTotalUsersCount, setToggleFetching, getUsers, pageChanges, 
                               unfollowThunk, followThunk, findUsersThunk })
                        (UsersAPI)

export default UsersContainer

type PropsType ={
    getUsers:(currentPage:number , pageSize: number )=> void
    pageChanges:(pageNumber: number, pageSize:number )=> void
    findUsersThunk:( term:string, friend:boolean) => void
    currentPage:number
    pageSize:number
    isToggleFetching:boolean
    setToggleFetching:(isToggleFetching: boolean)=> void
    users: userType[]
    totalUsersCount: number
    pagesCount: number
    unfollowThunk:(userId: number) => Promise<void>
    followThunk: (userId: number) => Promise<void>
    setCurrentPage: (currentPage:number) => void
    term:string
    friend:boolean
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