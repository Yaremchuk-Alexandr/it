import  React from 'react';
import { NavLink } from 'react-router-dom';
import  classes  from '../DialogItem/DialogItem.module.css' 

const  DialogItem: React.FC<propsType>= (props)=> {
    return (
            <div className={classes.dialog}>
                <div className={classes.dialog + ''+ classes.active}>
                    <NavLink  to={'/dialogs/' + props.id}
                        className={classes.link}>
                           <div className="linkLogo" key={props.id}> <img alt='Logo' src='https://icons-for-free.com/iconfiles/png/512/store+app+store+google+google+play+logo+play+icon-1320196075704799897.png' /></div>
                        {props.name}
                    </NavLink>
                </div>
            </div>
    )
} 

export default DialogItem;

type propsType= {
    id:number
    name:string 
}