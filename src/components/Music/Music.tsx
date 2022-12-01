/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from "react";
import classes from './Music.module.css';
import { Formik, Form, Field } from 'formik';
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Music = (props: any) => {
  const FindMusicWithFormic = (props: any) => (
    <div>
      <Formik
        initialValues={{ term: '' }}
        onSubmit={(values, { setSubmitting }) => {
          props.searchMusicThunk(values.term)
          setSubmitting(false);
        }
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className={classes.inputField} type="input" name="term" placeholder='Enter music title ' />
            <Button htmlType="submit" icon={<SearchOutlined />} type='primary' disabled={isSubmitting} style={{ marginLeft: '10px' }} >
              FIND MUSIC
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );

  let musicList: ReactNode = props.hits.map(
    (((track: { track: { key: React.Key | null | undefined; subtitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; url: string; }; }) =>
      <div className={classes.MusicBox} key={track.track.key} > <div className={classes.musicName}>{track.track.subtitle} - {track.track.title}</div>
      <div> <a className={classes.musicLink} href={track.track.url} target='blank'>$={track.track.url}</a></div> <br /></div>)
    )
  )
  
  return (<>

    <div>
      <FindMusicWithFormic
        searchMusicThunk={props.searchMusicThunk}
      />
    </div>
    <div>
      {musicList}
    </div>
  </>
  );
}

export default Music