import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_CURRENT = 'TOTAL_USERS_CURRENT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';





const initialState = {

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

const usersPageReducer = (state = initialState, action) => {
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

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UNFOLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: TOTAL_USERS_CURRENT, totalUsersCount })
export const setToggleFetching = (isToggleFetching) => ({ type: TOGGLE_ISFETCHING, isToggleFetching })




export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleFetching(false))
        dispatch(setUsers(data.items))
    // dispatch(setTotalUsersCount(data.totalCount))
}


export const pageChanges = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setToggleFetching(true))
    dispatch(setCurrentPage(pageNumber))
    let data = await userAPI.getPageChanges(pageNumber, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setToggleFetching(false))
}


export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.makeUnfolowUser(userId)
        dispatch(setToggleFetching(false))
    if (data.resultCode === 0) {
        dispatch(unFollow(userId))
    }
}
export const followThunk = (userId) => async (dispatch) => {
    dispatch(setToggleFetching(true))
    let data = await userAPI.makefolowUser(userId)
        dispatch(setToggleFetching(false))
        if (data.resultCode === 0) {
            dispatch(follow(userId))
    }
}




export default usersPageReducer