import { getNewsList } from '../api/api'

const GET_NEWS:string = 'GET_NEWS'

type newsInitialState = {
    newsList:[]
}
const initialState:newsInitialState = {
    newsList: []
}

const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS: {
            return {
                ...state,
                newsList: {...action}
            }
        }
        default:
            return { ...state }
    }
}


export const getNews = (action:any) => ({ type: GET_NEWS, action })


export const getNewsThunk = () => {
    return  (dispatch) => {
        getNewsList.getNews()
        .then (articles => {
            console.log(articles)
            dispatch(getNews(articles))
        })
    }
}


export default NewsReducer



