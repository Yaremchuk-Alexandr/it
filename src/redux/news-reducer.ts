import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getNewsList } from '../api/api'
import { AppStateType } from './redux-store';

const GET_NEWS = 'GET_NEWS'

type newsInitialState = {
    newsList:[]
}


const initialState:newsInitialState = {
    newsList: []
}

const NewsReducer = (state = initialState, action:getNewsType):newsInitialState => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                newsList: state.newsList, ...action
            }
        }
        default:
            return { ...state }
    }
}

type getNewsType = {
    type: typeof GET_NEWS
    action: []
}
export const getNews = (action:[] ): getNewsType => ({ type: GET_NEWS, action })


export const getNewsThunk = () => {
     return (dispatch:Dispatch) => {
        getNewsList.getNews()
            .then(articles => {
                console.log(articles);
                dispatch(getNews(articles));
            });
    };
}


export default NewsReducer



