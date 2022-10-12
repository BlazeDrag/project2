import React, {useState,useEffect}  from 'react'
import Newsitem from './Newsitem'
import loading from './loading.gif'
import Load from './load'
import news from './news.jpeg'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

// import { createContext } from 'react'
const News=(props)=>   {
   const [state,setstate]=useState({
          article:[],
          loading:false,
          page:1 ,
          maxpage:0,
          totres:0,
          loadbar:false,
            })
  
      useEffect(()=>{update()},[])
       
        const update=async()=>{
        props.setprogress(true)
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1e4a78aaeb824655b30103e728b581a5&pageSize=6`
        
        let data= await fetch(url);
        let pars=await data.json()
        setTimeout(() => {
          setstate({ article:pars.articles,loading:false, page:state.page,
        maxpage:Math.ceil(pars.totalResults/20),totres:pars.totalResults,loadbar:false})
        props.setprogress(false)
          
        }, 300);
      }
      const fetchmore= async()=>{
        
          let url1= `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1e4a78aaeb824655b30103e728b581a5&pageSize=6&page=${state.page+1}`
          
        let data1= await fetch(url1);
        let pars1=await data1.json()
        
          setstate({ 
        article:state.article.concat(pars1.articles),loading:false,
        page:state.page+1,maxpage:state.maxpage,totres:pars1.totalResults,loadbar:state.loadbar,})
        
        }
      return (
      <>
      
   <h2 className="m " >Top Headlines - {props.heading}</h2>
     <div className='container my-3'>
      
      <div className="row"> 
       {state.article?.map((element)=>{
        return <div key={element.url} className="col-md-4">
        <Newsitem title={element.title?element.title.slice(0,45):""} date={element.publishedAt?element.publishedAt:""}  description={element.descriptionl?element.description.slice(0,88):""} imgUrl={element.urlToImage?element.urlToImage:`${news}`} fullnews={element.url?element.url:""}/>
        </div>})}</div> 
        </div>
        {state.article&&
       <InfiniteScroll
       dataLength={state.article.length}
       next={fetchmore}
       hasMore={state.article.length!==state.totres}
       loader={<Load/>}
       >
       </InfiniteScroll>}
          
       </>
    
    )
  
}
 News.defaultProps={
      category:'general'
    }
News.propTypes={
      category:PropTypes.string,
    }
export default News;    