import React from "react";
import Post from '../MyPosts/Post/Post';
import classes from './MyPosts.module.css';
import { useState } from "react";
import {Field, reduxForm} from 'redux-form';
import { requered, maxLengthCreator} from '../../../utils/Validators/validate';
import {Element}  from '../../../common/Preloader/FormControls/FormControl'


 const maxLength10 =  maxLengthCreator(10)

const PostForm =(props) =>{
    return(
    <form onSubmit={props.handleSubmit}>
        <Field name={'post'} placeholder={'new post'} component={Element} elementtype='textarea' validate= {[maxLength10, requered ]}/>
        <button> Add post </button>
    </form>
)}
const PostReduxForn = reduxForm({form:'Post'})(PostForm) 



const MyPosts = (props) => {

    
        // const newPostElement = React.createRef()

    // const onAddPost = () => {
    //     props.addPost()
    // }

    // const onPostChange = () => {
    //     let text = newPostElement.current.value
    //     props.onPostChange(text)
    // }   
    
    //  let onChangeStatus=()=>{
    //     setStatus(!useState())
    // }
    const postsElements = props.state.map(post => <Post message={post.message} like={post.like} key={post.id} />)
    
    const [status,setStatus] = useState(true)
    const [statusText, setStatusText] = useState(props.getMyStatusThunk())

    const onStatusChange = (e) =>{
         setStatusText(e.target.value)

    }
    
    const onUpdateStatus =() =>{
        props.updateMyStatusThunk(statusText)
        setStatus(true)
        
    }

    const onSubmit = (formData)=>{
        props.addPost(formData)
    }
//     return  <div>
//                 < PostReduxForn onSubmit={onSubmit}
//                 addPost={props.addPost}
//                 />
//             </div>
// }

   
    return (
        <div>
            <div className={classes.myStatus}> 
            {status 
            ?    <span onDoubleClick={()=>setStatus(false)}> {props.myStatus || 'hello'}  </span>
            :    <div className={classes.myStatus} > 
                <input onChange={onStatusChange}  value= {statusText}  autoFocus={true} /> <button   onClick={onUpdateStatus} > SEND </button></div>
            } 
            </div>

            <h3> My Posts</h3> 
        
            <div className={classes.MyPosts}>

                < PostReduxForn onSubmit={onSubmit}
                                addPost={props.addPost}
                                />
            
                {/* <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
                <button onClick={onAddPost}>Add post</button> */}
            </div >
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;