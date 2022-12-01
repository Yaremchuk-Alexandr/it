import Music from "./Music";
import { connect } from 'react-redux';
import { searchMusicThunk, setMusicThunk } from '../../redux/music-reducer'
import { useEffect } from 'react';
import { AppStateType } from '../../redux/redux-store';

const MusicContainer = (props: any) => {

    useEffect(() => {
        setMusicThunk()
    }, [])

    return (
        <Music
            setMusicThunk={setMusicThunk}
            searchMusicThunk={searchMusicThunk(props.term)}
            {...props}
        />
    )

}

const mapStateToProps = (state: AppStateType) => {
    return {
        tracks: state.music.tracks,
        track: state.music.track,
        hits: state.music.hits,
        hit: state.music.hit
    }
}

const MusicMaxContainer = connect(mapStateToProps, { setMusicThunk, searchMusicThunk })(MusicContainer)

export default MusicMaxContainer