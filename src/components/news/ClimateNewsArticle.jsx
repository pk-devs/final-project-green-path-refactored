// Setup if need to use all data available
export const ClimateNewsArticle = ({ article }) => {
    return (
      <div className="news-article">
        <h2>{article.title}</h2>
        <p>Published At: {article.publishedAt}</p>
        {article.urlToImage && <img src={article.urlToImage} alt="Article" />}
        {article.author && <p>Author: {article.author}</p>}
        {article.description && <p>{article.description}</p>}
        {/* {article.source.name && <p>{article.source.name}</p>} */}
        {article.url && <p>{article.url}</p>}
      </div>
    )
  }
  