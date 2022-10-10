import Music from "./Music";
import { connect } from 'react-redux';
import { setMusicThunk } from '../../redux/music-reducer'
import { useEffect } from 'react';


const MusicContainer = (props) => {

    useEffect(() => {
        setMusicThunk()
    }, [setMusicThunk])



    return (
        <Music

            setMusicThunk={setMusicThunk}
          
            {...props}
        />
    )

}

const mapStateToProps = (state) => {
    return {
        tracks: state.music.tracks,
        track:state.music.track
        // key: state.music.tracks.key,
        // title: state.music.tracks.title,
        // subtitle: state.music.tracks.subtitle,
        // url: state.music.tracks.url
    }
}

const MusicMaxContainer = connect(mapStateToProps, { setMusicThunk })(MusicContainer)

export default MusicMaxContainer