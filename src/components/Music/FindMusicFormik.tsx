import React from 'react' 
import { Formik, Form, Field } from 'formik';

const FindMusicWithFormic = (props:any) => (
    <div>
      <Formik
        initialValues={{ find:'' }}
        
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="input" name="find" />
           
            <button type="submit" disabled={isSubmitting} onClick={props.setMusicThunk}>
              FIND MUSIC
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
  
  export default FindMusicWithFormic