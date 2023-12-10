import { Link } from "react-router-dom"
import "./PathItem.css"

export const PathItem = ({ path }) => {
  return (
    <div className="path-item">
      <div>
        <h2>{path.question}</h2>
        <p>{path.description}</p>
      </div>
      <Link className="path-link" to={`/path/${path.id}`}>Explore path</Link>
    </div>
  )
}