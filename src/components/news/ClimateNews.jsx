import { useEffect } from "react"
import { isLoading, fetchedArticles, apiError } from "../../reducers/apiSlice"
import { useDispatch, useSelector } from "react-redux"
import "./ClimateNews.css"

const apiKey = "a555399a0d004f32b6043cb58007040d"
const keyword = "\"climate change\"" // "" creates exact match, with out will give each word by itself as keyword 
const baseUrl = "https://newsapi.org/v2/everything?"
const pageSize = 10 // max. 100
const sortBy = "relevancy" // other possibilities: popularity, publishedAt, (relevancy)
const url = `${baseUrl}q=${keyword}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`

export const ClimateNews = () => {
    const dispatch = useDispatch()
    const { articles, loading, error} = useSelector(state => state.api)
    
    useEffect(() => {
        dispatch(isLoading(true))
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("No connection")
                }
                return response.json()
            })
            .then(data => {
             if(data.articles && Array.isArray(data.articles)) {
                dispatch(fetchedArticles(data.articles))
             } else {
                throw new Error("Data format is wrong")
             }
             })
            .catch(error => {
                dispatch(apiError(error.message))
                dispatch(isLoading(false))
            })
    }, [dispatch, url])

    if(loading) return <p>Getting the news for you...</p>
    if(error) return <p>Something went wrong: {error}</p>

    return (
        <div>
        <h2 className="climate-news-heading">News about climate change</h2>
            <div className="climate-news-container">
                {Array.isArray(articles) && articles.map(article => (
                    <div key={article.title} className="climate-news-article">
                        <div>
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="article-image" />
                            )}
                            <h2>{article.title}</h2>
                            <p className="article-description">{article.description}</p>
                        </div>
                        <div>
                            <p className="article-published">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
                            {article.url && (
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">Read full article</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
