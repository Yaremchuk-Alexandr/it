import { Dispatch } from 'redux';
import { getNewsList } from '../api/api'

const GET_NEWS = 'GET_NEWS'

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

type newsInitialState = {
    newsList:[]
}
type getNewsType = {
    type: typeof GET_NEWS
    action: []
}

