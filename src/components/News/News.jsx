import React from "react"
import classes from './News.module.css'


const News =(props)=>{




    const newsListContainer = props.newsList.action.map(news => 
        <div  className={classes.newsContainer} key = {news.id} >
            <div className={classes.title}> <div> Data:{news.published_date}</div> <div> Title:{news.title}</div> <div> Author:{news.author}</div></div>
            <div className={classes.secondBlock}> <div><img className={classes.newsImg} src={news.media}/></div> <div className={classes.discription}> {news.summary}</div></div>
        </div>)

    return (
        <div>
        {newsListContainer} 
        </div>
    )
}

export default News;