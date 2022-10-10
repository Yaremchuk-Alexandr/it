import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Music.module.css';
import MusicPlayer from "../../common/MusicPlayer/MusicPlayer";




const Music = (props) => {

    // onClickHandler (track.key, track.url, track.title){
        
        // props.selectTrack()
    // }
       
            
    

    let musicList = props.tracks.map(track => <div className={classes.MusicBox}key ={track.key} > <div className={classes.musicName}>{track.subtitle} - {track.title}</div>  <div><NavLink className={classes.musicLink} >{track.url}</NavLink></div> <br/></div> )


    return (<>
    
        <div>
            <div><h2>Find Music </h2> </div>
            <div><input /></div>
            
            <button onClick={props.setMusicThunk}>FIND</button>
        </div>
        <div>
            {musicList}
        </div>
    </>
    );
}




export default Music