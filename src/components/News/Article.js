import React from 'react'
import BorderCard from '../common/BorderCard'

const Article = (props) => {
  //requires a props.article
  return (
    <BorderCard style={{minWidth: '1000px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <img 
            src={props.article.urlToImage} 
            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
            alt="article img"/>
        </div>
        <div style={{flex: 3, flexDirection: 'column', padding: '0 8px'}}>

          <h2>{props.article.title}</h2>
          <p>{props.article.description}</p>
          {props.article.source ?  (
            <small>{props.article.source.name}</small> 
          ) : (
            null
          )}
        </div>
      </div>
    </BorderCard>
  )
}

export default Article;