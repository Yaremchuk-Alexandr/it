import React from 'react'
import News from './News'
import { connect } from 'react-redux';
import {getNewsThunk} from '../../redux/news-reducer'
import { useEffect } from 'react';


const NewsContainer = (props) => {

    useEffect(()=>{
        props.getNewsThunk()
    },[])
     
 

 return (
    < News {...props}/>
    )
}

const mapStateToProps= (state) =>{
    return {
        newsList: state.news.newsList
    }
}

const NewsContainerConnect = connect(mapStateToProps, { getNewsThunk })(NewsContainer)

export default NewsContainerConnect