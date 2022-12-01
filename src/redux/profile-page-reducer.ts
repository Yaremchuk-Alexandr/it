import { AppStateType } from './redux-store';
import { Dispatch } from "redux";
import { userAPI, userStatusApi } from "../api/api";



const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_MY_STATUS ='SET_MY_STATUS'
const SET_POST_STATUS='SET_POST_STATUS'




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

    newPostText: '',
    profile: null,
    status: '',
    myStatus: ''

}

const profilePageReducer = (state = initialState, action:ActionsTypes): profileInitialState => {

    switch (action.type) {
        case ADD_POST:{
            return {
                ...state,
                posts: [...state.posts, {id:Math.random()*1000, message:action.formData.post , like:0}]
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
        case SET_POST_STATUS: {
            return { ...state, newPostText: action.newPost }
        }
        default:
            return { ...state }
    }

}
type ActionsTypes = addPostType | setProfileType | setUserStatusType | setMyStatusType | setPostStatusType

type addPostType = {
    type: typeof ADD_POST
    formData:{post:string}
}

type setPostStatusType={
    type:typeof SET_POST_STATUS
    newPost:string
}
export const addPost = (formData:{post:string}):addPostType => ({ type: ADD_POST, formData})
export const  setPostStatus = (newPost:string):setPostStatusType => ({type:SET_POST_STATUS, newPost})


type setProfileType = {
    type : typeof SET_PROFILE
    profile: any
}
export const setProfile = (profile:any):setProfileType => ({ type: SET_PROFILE, profile })
type setUserStatusType ={
    type: typeof SET_STATUS
    status:string
}
export const setUserStatus = (status:string):setUserStatusType => ({ type: SET_STATUS, status})
type setMyStatusType = {
    type: typeof SET_MY_STATUS
    status: string
}
export const setMyStatus = (status:string):setMyStatusType => ({ type: SET_MY_STATUS, status})




export const getUserProfileThunk = (params:any) => async (dispatch:Dispatch<ActionsTypes>) => {
        
        let response = await userAPI.getUserProfile(params)
            dispatch(setProfile(response.data))
}

export const getUserStatusThunk = (userId:number) => async (dispatch:Dispatch<ActionsTypes>) => {
       let response = await  userStatusApi.getUserStatus(userId)
             dispatch(setUserStatus(response.data)) 
           
}
export const updateUserStatusThunk = (status:string) => async (dispatch:Dispatch<ActionsTypes>) => {   
        let response = await userStatusApi.updateUserStatus(status)
            if (response.data.resultCode === 0)
            dispatch(setUserStatus(status))
  }


export const updateMyStatusThunk = (status:string) => async (dispatch:Dispatch<ActionsTypes>) => {   
    let response = await userStatusApi.updateUserStatus(status)
        if (response.data.resultCode === 0)
        dispatch(setMyStatus(status))
    }

export const getMyStatusThunk = () => async (dispatch:Dispatch<ActionsTypes>, getState:()=>AppStateType) => {
    let response = await userStatusApi.getMyStatus() 
         dispatch(setMyStatus (response.data))
        
}


export default profilePageReducer