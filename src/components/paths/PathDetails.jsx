import "./PathDetails.css"
import { CountPath } from "./CountPath"
import { useParams } from "react-router"

export const PathDetails = ({ path }) => {
    const { pathId } = useParams()

    if (!path) {
        return <div>Path not found...</div>;
    }

    return (
        <div className="path-details">
            <div className="path-details-container">
                <h2>{path.question}</h2>
                <p>{path.description}</p>
                <p>Tags: {path.tags.join(', ')}</p> 
            </div>
            {pathId && <CountPath currentPathId={pathId} />}
        </div>
    )
}