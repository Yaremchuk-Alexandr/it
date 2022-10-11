import { userAPI, userStatusApi } from "../api/api";
import { setToggleFetching } from './users-page-reducer';


const SET_STATUS:string = 'SET_STATUS';
const ADD_POST:string = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE:string = 'SET_PROFILE';
const SET_MY_STATUS:string ='SET_MY_STATUS '



type postType ={
    id:number,
    message:string,
    like:number
}
type profileInitialState = {
    posts:Array<postType>
    newPostText: string
    profile:string |null
    status:string
    myStatus:string
}
const initialState:profileInitialState = {
    posts: [
        { id: 1, message: 'Hello guys !!!', like: 5 },
        { id: 2, message: 'Hi! how are you ?', like: 7 },
        { id: 3, message: 'I am fine, and you?', like: 0 },
        { id: 4, message: 'I am fine, and you?', like: 1 }
    ],

    newPostText: 'new post',
    profile: null,
    status: '',
    myStatus: ''

}

const profilePageReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id:7, message:action.formData.post , like:0}]
            }
        }

        case SET_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_MY_STATUS: {
            return { ...state, myStatus: action.status }
        }
        default:
            return { ...state }
    }

}

export const addPost = (formData:any) => ({ type: ADD_POST, formData})
// export const onPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, text })
export const setProfile = (profile:any) => ({ type: SET_PROFILE, profile })
export const setUserStatus = (status:any) => ({ type: SET_STATUS, status})
export const setMyStatus = (status:any) => ({ type: SET_MY_STATUS, status})




export const getUserProfileThunk = (params, setToggleFetching) => async (dispatch) => {
        dispatch(setToggleFetching(true))
        let response = await userAPI.getUserProfile(params)
            dispatch(setToggleFetching(false))
            dispatch(setProfile(response.data))
          
    }
export const getUserStatusThunk = (userId) => async (dispatch) => {
       let response = await  userStatusApi.getUserStatus(userId)
             dispatch(setUserStatus(response.data))       
}
export const updateUserStatusThunk = (status) => async (dispatch) => {   
        let response = await userStatusApi.updateUserStatus(status)
            if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
  }
export const updateMyStatusThunk = (status) => async (dispatch) => {   
    let response = await userStatusApi.updateUserStatus(status)
        if (response.data.resultCode === 0)
        dispatch(setMyStatus(status))
    }

export const getMyStatusThunk = () => async (dispatch) => {
    let response = await userStatusApi.getMyStatus() 
         dispatch(setMyStatus(response.data))
}


export default profilePageReducer