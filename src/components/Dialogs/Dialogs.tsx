import React, { FC } from 'react'
import classes from './Dialogs.module.css';
import DialogItem from '../DialogItem/DialogItem';
import { Field,  FormSubmitHandler,  reduxForm, SubmitHandler } from 'redux-form';
import { requered, maxLengthCreator  } from '../../utils/Validators/validate';
import { Element } from '../../common/Preloader/FormControls/FormControl';
import { dialogInitialState, addMessage } from '../../redux/dialogs-page-reducer';

const maxLengt30 = maxLengthCreator(30)



const MessagesForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'message'} placeholder={'new message'} component={Element}  elementtype='textarea' validate={[requered, maxLengt30]} />
                <button> Submit </button>
            </div>
        </form>
    )
}

const MessagesReduxForm = reduxForm({form:'Messages'})(MessagesForm)

type messagePropsType = {
    message:string
    id:number
}
const Message:FC <messagePropsType> = (props) => {

    return <div className={classes.message}>{props.message}</div>
}

type dialogsPropsType = {
    dialogs:[]
    dialogsPage:dialogInitialState
    id:number
    addMessage:(formData:any)=>void
}
const Dialogs:FC <dialogsPropsType> = (props) => {
   
    const dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
    const messagesElements = props.dialogsPage.messages.map(message => <div key={message.id}><Message  message={message.massage} id={message.id} /></div> )


    const onSubmit= (formData:any) =>{
        props.addMessage(formData)
    }



    return (
        <div className={classes.dialogs}>
            < div className={classes.dialog}>
                <div className={classes.dialogsElements}>
                 {dialogsElements}
                </div>
            </div>
            <div className={classes.messages}>

                {messagesElements}

                <div className={classes.addMessage}>

                    <MessagesReduxForm onSubmit={onSubmit}
                                    //    addMessage={props.addMessage} 
                                    />

                    {/* <textarea onChange={addMessageText} value={props.dialogsPage.newMessageText} ref={newMassage} />
                    <button onClick={addMessageItem}>Submit</button> */}
                    
                </div>
            </div>
        </div>
    )
}


export default Dialogs;