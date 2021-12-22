import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Article from './Article';

const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getNews = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/test/news/Java");
        console.log(res.data);
        setLoading(false);
        setArticles(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }
    _getNews();
  },[])

  const displayArticles = () => {
    // [{article1}, {article2}, {article3}]
    // [<Article1 />, <Article2 /> <Article3 />]
    return articles.map((article, i) => (
      <Article article={article} key={article.url} />
    ))
  }

  return (
    <div style={{width: "100%", justifyContent: 'center'}}>
      {loading ? (
        <p>Loading...</p>
      ) : displayArticles()
      }
    </div>
  )
}

export default Articles;