import { ThunkAction } from "redux-thunk";
import { userAPI } from "../api/api";
import { AppStateType } from './redux-store';

const FOLLOW  = 'FOLLOW';
const UNFOLOW  = 'UNFOLOW';
const SET_USERS  = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_CURRENT  = 'TOTAL_USERS_CURRENT';
const TOGGLE_ISFETCHING  = 'TOGGLE_ISFETCHING';



export type userType ={
    id:number,
    folowed:boolean,
    url:string
    fullName:string
    status:string
    location:{city: string ,country: string }
}
type userInitialState = {
    users:Array<userType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isToggleFetching:boolean
}

const initialState:userInitialState = {

    users: [
        // { id: 1, folowed: false, url:'https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png', fullName: 'Max', status: 'I am here', location: { city: 'Kiev', country: 'Ukraine' } },
        // { id: 2, folowed: true, url:'https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png', fullName: 'Alf', status: 'I am here too', location: { city: 'London', country: 'Enland' } },
        // { id: 3, folowed: false, url:'https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png', fullName: 'Alfred', status: 'I am here too too', location: { city: 'Warshava', country: 'Poland' } },
        // { id: 4, folowed: true, url:'https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png', fullName: 'Karl', status: 'And I am here ', location: { city: 'Berlin', country: 'Germany' } },
],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isToggleFetching: true,


}

const usersPageReducer = (state = initialState, action:ActionsTypes): userInitialState => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })

            }

        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOTAL_USERS_CURRENT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_ISFETCHING: {
            return { ...state, isToggleFetching: action.isToggleFetching }
        }

        default:
            return { ...state }
    }

}



type ActionsTypes = followType |unFollowType | setUsersType | setCurrentPageType | setTotalUsersCountType| setToggleFetchingType

type followType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId:number):followType => ({ type: FOLLOW, userId })
type unFollowType  = {
    type: typeof UNFOLOW
    userId:number
}
export const unFollow = (userId:number): unFollowType => ({ type: UNFOLOW, userId })
type setUsersType = {
    type:typeof SET_USERS
    users:Array<userType>
}
export const setUsers = (users:Array<userType>):setUsersType => ({ type: SET_USERS, users })
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage:number
}
export const setCurrentPage = (currentPage:number):setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
type setTotalUsersCountType = {
    type: typeof TOTAL_USERS_CURRENT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount:number):setTotalUsersCountType => ({ type: TOTAL_USERS_CURRENT, totalUsersCount })
export type setToggleFetchingType = {
    type: typeof TOGGLE_ISFETCHING
    isToggleFetching:boolean
}
export const setToggleFetching = (isToggleFetching:boolean):setToggleFetchingType => ({ type: TOGGLE_ISFETCHING, isToggleFetching })




export const getUsers = (currentPage:number, pageSize:number) => async (dispatch:any) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleFetching(false))
        dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}
export const findUsersThunk= ( term:string, friend:boolean) => async (dispatch:any) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.findUsers(term,friend)
        dispatch(setToggleFetching(false))
        dispatch(setUsers(data.items))
    
}

export const pageChanges = (pageNumber:number, pageSize:number): 
    ThunkAction<Promise<void>, AppStateType,unknown, ActionsTypes>  => async (dispatch, getState:()=>AppStateType) => {
    dispatch(setToggleFetching(true))
    dispatch(setCurrentPage(pageNumber))
    let data = await userAPI.getPageChanges(pageNumber, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setToggleFetching(false))
}


export const unfollowThunk = (userId:number): ThunkAction<Promise<void>, AppStateType,unknown, ActionsTypes>  => async (dispatch, getState:()=>AppStateType) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.makeUnfolowUser(userId)
        dispatch(setToggleFetching(false))
    if (data.resultCode === 0) {
        dispatch(unFollow(userId))
    }
}
export const followThunk = (userId:number):ThunkAction<Promise<void>, AppStateType,unknown, ActionsTypes> => async (dispatch, getState:()=>AppStateType) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.makefolowUser(userId)
        dispatch(setToggleFetching(false))
        if (data.resultCode === 0) {
            dispatch(follow(userId))
    }
}




export default usersPageReducer