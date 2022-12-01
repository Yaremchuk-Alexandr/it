import Post from './Post/Post'
import classes from './MyPosts.module.css'
import { useState } from 'react';
import { Input, Button, Form, message, Popover } from 'antd';
import { SendOutlined, MessageOutlined } from '@ant-design/icons'
import Title from 'antd/lib/typography/Title'
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/profile-page-reducer';


// const maxLength10 = maxLengthCreator(10)


// redux-form
// const PostForm =(props:any) =>{

//     return(
//     <Form onSubmit={props.handleSubmit}>
//         <Field name={'post'} placeholder={'new post'} component={Element} elementtype='textarea' validate= {[maxLength10, requered ]}/>
//         <button   onSubmit={props.onSubmit} > Add post </button>   
//     </Form>
// )}

// const PostReduxForm = reduxForm({form:'Post'})(PostForm) 



const MyPosts = (props: any) => {

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

        //redux-form
    // const onSubmit = (formData: any)=>{

    //     props.addPost(formData)

    //     return  <div>
    //                 < PostReduxForm onSubmit={onSubmit}
    //                 // addPost={props.addPost}
    //                 />
    //             </div>

    // }
    const postsElements = props.state.map((post: any) => <Post message={post.message} like={post.like} key={post.id} />)

    const [status, setStatus] = useState(true)
    const [statusText, setStatusText] = useState(props.getMyStatusThunk(''))


    const onStatusChange = (e: { target: { value: any } }) => {
        setStatusText(e.target.value)

    }

    const onUpdateStatus = () => {
        props.updateMyStatusThunk(statusText)
        setStatus(true)

    }

    const AddNewPostTextWithAntDesign = () => {


        const dispatch = useDispatch()
        const onFinish = async (values: any) => {
            dispatch(addPost(values))
        }

        const success = () => {
            const hide = message.success('Post added', 0);
            setTimeout(hide, 2000);
        };
        return (
            <Form
                layout='vertical'
                name="basic"
                onFinish={onFinish}

            >
                <Form.Item name='post' preserve={false}  >
                    <Input placeholder='Enter new post !' />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit" onClick={success} icon={<SendOutlined />}>
                        ADD POST
                    </Button>
                </Form.Item>
            </Form>
        )


    }
    const content = (
        <div className={classes.content}>
          <p>DoubleClick here, to change your status !</p>
        </div>
      );
    return (
        <div>
            <div className={classes.myStatus}> <Title level={2}>  My Status:{status}</Title>
                {status
                    ? <Popover content={content}><Title style={{ display: "flex" }} level={3}><span style={{ display: "flex" }}  onDoubleClick={() => setStatus(false)}> {props.myStatus || 'hello'}  </span> </Title></Popover>
                    : <div className={classes.myStatus} >
                        <Input placeholder='Add your new status' prefix={<MessageOutlined />} onChange={onStatusChange} value={props.statusText} autoFocus={true} />
                        <Button type="primary" icon={<SendOutlined />} onClick={onUpdateStatus} > SEND </Button>
                    </div>
                }
            </div>
            <h3> My Posts</h3>
            <div className={classes.MyPosts}>

                {/* < PostReduxForm  //redux-form
                onSubmit={onSubmit}
                                // addPost={props.addPost}
                                />  */}

                {/* <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
                <button onClick={onAddPost}>Add post</button> */}

                <AddNewPostTextWithAntDesign />

            </div >
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div >
    )
}

export default MyPosts;





