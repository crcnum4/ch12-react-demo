import React from 'react'
import BorderCard from '../common/BorderCard'

const Article = (props) => {
  //requires a props.article
  const {urlToImage, title, description, source} = props.article

  return (
    <BorderCard style={{minWidth: '1000px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <img 
            src={urlToImage} 
            style={{height: '100%', width: '100%', objectFit: 'cover'}} 
            alt="article img"/>
        </div>
        <div style={{flex: 3, flexDirection: 'column', padding: '0 8px'}}>

          <h2>{title}</h2>
          <p>{description}</p>
          {source ?  (
            <small>{source.name}</small> 
          ) : (
            null
          )}
        </div>
      </div>
    </BorderCard>
  )
}

export default Article;