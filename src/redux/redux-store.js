import  {applyMiddleware, legacy_createStore as createStore}  from 'redux';
import { combineReducers } from 'redux';
import profilePageReducer from './profile-page-reducer.ts';
import dialogsPageReducer from './dialogs-page-reducer.ts';
import usersPageReducer from './users-page-reducer.ts';
import navbarReducer from './navbar-reducer.ts';
import authReducer from './auth-reducer.ts';
import musicReducer from './music-reducer.ts';
import newsReducer from './news-reducer.ts'
import UserLoginReducer from './login-reducer.ts';
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




const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;