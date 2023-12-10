import { useDispatch } from "react-redux"
import { toggleSubPathCompleted } from "../../redux/reducers/pathSlice"
import "./SubPathItem.css"

export const SubPathItem = ({ subPath, pathId, resourceId }) => {
    const dispatch = useDispatch()
    
    const handleToggleButton = () => {
        dispatch(toggleSubPathCompleted ({
            pathId: pathId,
            resourceId: resourceId, 
            subPathId: subPath.id 
        }))
    }

    return (
        <div className="subpath-item">
            <h2>{subPath.question}</h2>
            <p>{subPath.description}</p>
            <p>Origin from: {subPath.relatedTo}</p>
            
            <button 
                className={`mark-read-button ${subPath.completed ? 'completed-true' : 'completed-false'}`}
                onClick={handleToggleButton}
            >
                {subPath.completed ? "Unmark" : "Mark as read"}
            </button>
        </div>
    )
}

