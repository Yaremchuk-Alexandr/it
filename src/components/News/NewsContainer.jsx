import React from 'react'
import News from './News'
import { connect } from 'react-redux';
import {getNewsThunk} from '../../redux/news-reducer.ts'
import { useEffect } from 'react';


const NewsContainer = (props) => {

    useEffect(()=>{
        props.getNewsThunk()
    },[props])
     
 

 return (
    < News newsList= {props.newsList}
                    {...props}/>
    )
}

const mapStateToProps= (state) =>{
    return {
        newsList: state.news.newsList
    }
}

const NewsContainerConnect = connect(mapStateToProps, { getNewsThunk })(NewsContainer)

export default NewsContainerConnect