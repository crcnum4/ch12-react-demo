import axios from 'axios';
import React, {useState, useEffect} from 'react';

const NewsContext = React.createContext({});

const NewsProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("javascript");


  useEffect(() => {
    // get the news from the api.
    const getNews = async (query) => {
      try {
        const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
        const res = await axios.get(`${host}/api/test/news/${query}`)
        setArticles(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    setLoading(true);
    getNews(query);

  }, [query])

  // {articles, loading} == {articles: articles, loading: loading}
  return (
    <NewsContext.Provider value={{articles, loading, setQuery}}> 
      {props.children}
    </NewsContext.Provider>
  )
}

export {NewsProvider, NewsContext};