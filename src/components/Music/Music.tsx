/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  ReactNode } from "react";
import classes from './Music.module.css';
import { Formik, Form, Field} from 'formik';




const Music = (props:any) => {
    // console.log(props)
    // onClickHandler (track.key, track.url, track.title){
        
        // props.selectTrack()
    // }


    const FindMusicWithFormic = (props:any) => (
        <div>
          <Formik
            initialValues={{ term:'' }}
            
            onSubmit={(values, { setSubmitting }) => {
              props.searchMusicThunk (values.term)
              setSubmitting(false);
              }
            }
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="input" name="term" />
                <button type="submit" disabled={isSubmitting} >
                  FIND MUSIC
                </button>
              </Form>
            )}
          </Formik>
        </div>
      );
             
    
    let musicList:ReactNode= props.hits.map(
        (((track: { track: { key: React.Key | null | undefined; subtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; url: string ; }; }) =>
        <div className={classes.MusicBox}key ={track.track.key} > <div className={classes.musicName}>{track.track.subtitle} - {track.track.title}</div>  

        <div> <a  className={classes.musicLink}  href= {track.track.url} target ='blank'>$={track.track.url}</a></div> <br/></div> )
    )  
    )
    return (<>
    
        <div>
            {/* <div><h2>Find Music </h2> </div>
            <div><input /></div> */}
            <FindMusicWithFormic 
                        searchMusicThunk= {props.searchMusicThunk}
            />
            
            {/* <button onClick={props.setMusicThunk}>FIND</button> */}
        </div>
        <div>
            {musicList}
        </div>
    </>
    );
}




export default Music