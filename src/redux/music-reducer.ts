import { getMusic } from '../api/api';

const SET_MUSIC_LIST: string = 'SET_MUSIC_LIST';
// const SELECT_MUSIC_TRACK = 'SELECT_MUSIC_TRACK'


type musicInitialStateType = {
    pageSize: number,
    startFrom: number,
    tracks: [],
    track:{}
}

const initialState:musicInitialStateType = {
    pageSize: 10,
    startFrom: 1,
    tracks:[ ],
    track:{ }
    
}


const musicReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case SET_MUSIC_LIST: {
            return {
                ...state, tracks:action.musicList
            }
        }
        // case SELECT_MUSIC_TRACK:{
        //     return{
        //         ...state,
        //         track:{...action }
        //     }
        // }
        default:
            return { ...state }
    }
}


export const setMusicData = (musicList:any) => ({ type: SET_MUSIC_LIST, musicList})
// export const selectTrack = (key, title, url) => ({ type:SELECT_MUSIC_TRACK, action:{key, title, url} })



export const setMusicThunk = ( ) => {
        return (dispatch) => {
              getMusic.getMusicList()
              .then(tracks =>{              
                console.log(tracks)        
                dispatch(setMusicData(tracks))  
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




