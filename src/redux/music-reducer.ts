import { Dispatch } from 'redux';
import { AppStateType } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { getMusic, searchMusic } from '../api/api';

const SET_MUSIC_LIST = 'SET_MUSIC_LIST'
const SEARCH_MUSIC = 'SEARCH_MUSIC '


// const SELECT_MUSIC_TRACK = 'SELECT_MUSIC_TRACK'



type musicInitialStateType = {
    pageSize: number,
    startFrom: number,
    tracks: [],
    track:{}
    hits:[]
    hit:{}
}

const initialState:musicInitialStateType = {
    pageSize: 10,
    startFrom: 1,
    tracks:[],
    track:{},
    hits: [],
    hit:{}
        
    
    
}


const musicReducer = (state = initialState, action:setMusicDataType | searchMusicDataType):musicInitialStateType => {

    switch (action.type) {
        case SET_MUSIC_LIST: {
            return {
                ...state, tracks:action.musicList
            }
        }
        case SEARCH_MUSIC: {
            return {
                ...state, hits:action.searchMusicList         
            }
        }

        default:
            return { ...state }
    }
}

type setMusicDataType = {
    type: typeof SET_MUSIC_LIST
    musicList: []
}
type searchMusicDataType = {
    type: typeof SEARCH_MUSIC
    searchMusicList: []
}

export const searchMusicData = (searchMusicList:[]):searchMusicDataType => ({ type: SEARCH_MUSIC, searchMusicList})
export const setMusicData = (musicList:[]):setMusicDataType => ({ type: SET_MUSIC_LIST, musicList})

// export const selectTrack = (key, title, url) => ({ type:SELECT_MUSIC_TRACK, action:{key, title, url} })



export const setMusicThunk = () :ThunkAction<void, AppStateType, unknown, setMusicDataType > => {
        return (dispatch:Dispatch<setMusicDataType>) => {
              getMusic.getMusicList()
              .then(tracks =>{                     
                dispatch(setMusicData(tracks))  
            })
        }   
    }
    
export const searchMusicThunk = (term:string) :ThunkAction<void, AppStateType, unknown, searchMusicDataType > => {
        return (dispatch) => {
    searchMusic.searchMusiclist(term)
              .then(hits =>{                     
                dispatch(searchMusicData(hits))  
            })
        }   
    }


// export const setSelectTrack = (dispatch) =>{
//     dispatch(selectTrack())
// }    

// export const setMusicThunk = (key, title, subtitle, url ) => {
//     return (dispatch) => {
//           getMusic.getMusicList()
//           .then(tracks =>{              
//             console.log(tracks)        
//             dispatch(setMusicData(key, title, subtitle, url))  
//         })
//     }   
// }


    export default musicReducer




