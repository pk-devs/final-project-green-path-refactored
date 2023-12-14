import { NewsArticles  } from "../../NewsArticles"
export const ClimateNewsHardCoded = () => {
  
    return (
    <div className="climate-news-container">
        
        {NewsArticles.map(article => (
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
        )
            
    )}
    
    </div>
  )
}
