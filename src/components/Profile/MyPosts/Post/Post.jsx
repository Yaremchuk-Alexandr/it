import React from "react";
import classes from './Post.module.css'

const Post = (props) => {

    return(
        <div className={classes.post}>
            <div className={classes.item}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/1200px-OOjs_UI_icon_userAvatar.svg.png'/>
                {props.message}
                
            <div> 
            <span>&#9829;{props.like}</span>
            </div>  
        </div>
        </div>      
    )
}


export default Post;