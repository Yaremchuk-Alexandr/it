import React, { createElement, useState } from 'react'
import { useSelector } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Avatar, Button, Comment, Tooltip, Form, List } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  // datetime: string;
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

const CommentList = ({ comments }: { comments: CommentItem[] }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

// const maxLengt30 = maxLengthCreator(30)



// const MessagesForm = (props:any) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name={'message'} placeholder={'new message'} component={Element}  elementtype='textarea' validate={[requered, maxLengt30]} />
//                 <button> Submit </button>
//             </div>
//         </form>
//     )
// }

// const MessagesReduxForm = reduxForm({form:'Messages'})(MessagesForm)

// type messagePropsType = {
//     message:string
//     id:number
// }
// const Message:FC <messagePropsType> = (props) => {

//     return <div className={classes.message}>{props.message}</div>
// }

// export type dialogsPropsType = {
//     dialogs:[]
//     // dialogsPage:dialogInitialState
//     id:number
//     // addMessage:(formData:any)=>void
// }



// const Dialogs:FC <dialogsPropsType> = (props) => {
const Dialogs = () => {
  const dialogsPage = useSelector((state: AppStateType) => state.dialogsPage.dialogs)
  const messages = useSelector((state: AppStateType) => state.dialogsPage.messages)
 
  // const dispatch = useDispatch()
  // let dialogsPage= useSelector((state:AppStateType)=> state.dialogsPage)



  // const dialogsElements = dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  // const messagesElements =dialogsPage.messages.map(message => <div key={message.id}><Message  message={message.massage} id={message.id} /></div> )


  // const onSubmit= (formData:any) =>{
  //     dispatch (addMessage(formData))
  // }
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  let mess = dialogsPage.map((dialogs) => {
    return <Comment key={dialogs.id} avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />} actions={actions} author={dialogs.name} content={messages.map((mass) => <div key={mass.id}>{mass.massage}</div>)} />
  })

///////////////////////////////////////////////// ADD MESSAGES //////////

  
const [comments, setComments] = useState<CommentItem[]>([]);
const [submitting, setSubmitting] = useState(false);
const [value, setValue] = useState('');

const handleSubmit = () => {
  if (!value) return;

  setSubmitting(true);

  setTimeout(() => {
    setSubmitting(false);
    setValue('');
    setComments([
      ...comments,
      {
        author: 'Han Solo',
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: <p>{value}</p>,
        // datetime: moment('2016-11-22').fromNow(),
      },
    ]);
  }, 1000);
};

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setValue(e.target.value);
};


  //   }
return (
    // FOR REDUX FORM
    // <div className={classes.dialogs}> 
    //     < div className={classes.dialog}>
    //         <div className={classes.dialogsElements}>
    //          {dialogsElements}
    //         </div>
    //     </div>
    //     <div className={classes.messages}>

    //         {messagesElements}

    //         <div className={classes.addMessage}>

    //             <MessagesReduxForm onSubmit={onSubmit}
    //                             //    addMessage={props.addMessage} 
    //                             />

    //             {/* <textarea onChange={addMessageText} value={props.dialogsPage.newMessageText} ref={newMassage} />
    //             <button onClick={addMessageItem}>Submit</button> */}

    //         </div>
    //     </div>
    <>
      <div>{mess}</div>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    
  </>
);

    //{/* <Comment
    //             actions={actions}
    //             author={[...mess]}
    //   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
    //   content={
    //     <p> */}
    //       {/* {[...messagess]} */}
    //     {/* </p>
    //   } */}
    //   datetime={
    //     <Tooltip title="2016-11-22 11:22:33">
    //       <span>{"DATA"}</span>
    //     </Tooltip>
    //   }
    // />

    //     </div>
}



export default Dialogs



