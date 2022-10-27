import  {applyMiddleware, legacy_createStore as createStore}  from 'redux';
import { combineReducers } from 'redux';
import profilePageReducer from './profile-page-reducer';
import dialogsPageReducer from './dialogs-page-reducer';
import usersPageReducer from './users-page-reducer';
import navbarReducer from './navbar-reducer';
import authReducer from './auth-reducer';
import musicReducer from './music-reducer';
import newsReducer from './news-reducer'
import UserLoginReducer from './login-reducer';
import  thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'



const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    navbar: navbarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    login: UserLoginReducer,
    form: formReducer,
    music: musicReducer,
    news: newsReducer
}) 

type reducerType = typeof reducers
export type AppStateType = ReturnType <reducerType>




const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;