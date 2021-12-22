import React from 'react';
import Articles from './Articles';

const News = () => {
  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>News</h1>
      <Articles />
    </div>
  )
}

export default News;