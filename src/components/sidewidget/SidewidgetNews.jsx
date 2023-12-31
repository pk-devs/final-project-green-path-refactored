// import { useSelector } from "react-redux"
import "./SidewidgetNews.css"
import { NewsArticles } from "../../NewsArticles"

export const SidewidgetNews = () => {
  // const { articles } = useSelector(state => state.api)

  return (
    <div className="sidewidget-news">
        <h2>News about climate change</h2>
        {NewsArticles.map(article => (
            <div className="sidewidget-news-article" key={article.title}>
                <a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
            </div>
        ))}
    </div>
  )
}
