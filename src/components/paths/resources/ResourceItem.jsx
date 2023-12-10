import { useDispatch } from "react-redux"
import { removeResource, toggleResourceCompleted } from "../../redux/reducers/pathSlice"
import { AddSubPath } from "../AddSubPath"
import { SubPathList } from "../subpaths/SubPathList"
import "./ResourceItem.css"

export const ResourceItem = ({ resource, pathId, resourceIndex, showAddSubPath, onAddSubPathClick }) => {
    const dispatch = useDispatch()

    const handleToggleButton = () => {
        dispatch(toggleResourceCompleted({
            pathId: pathId,
            resourceId: resource.id
        }))
    }

    const handleRemoveResource = () => {
        if (window.confirm("Are you sure you want to remove this resource?")) {
            dispatch(removeResource({
                pathId: pathId,
                resourceId: resource.id
            }))
        }
    }

    return (
        <div className="resource-item">
            <button 
                className={`mark-read-button ${resource.completed ? 'completed-true' : 'completed-false'}`}
                onClick={handleToggleButton}
            >
                {resource.completed ? "Unmark" : "Mark as read"}
            </button>

            <div className="content">
                <h3>{resource.title}</h3>
                <p>{resource.comment}</p>
                <p>Source: {resource.link ? <a href={resource.link} target="_blank" rel="noreferrer">{resource.link}</a> : "No link to resource provided"}</p>
            
                <button onClick={() => onAddSubPathClick(resourceIndex)} className="add-subpath-button">
                    {showAddSubPath[resourceIndex] ? "Hide" : "Add Sub-Path"}
                </button>
                <button className="remove-resource-button" onClick={handleRemoveResource}>Remove resource</button>
            </div>
            
            {showAddSubPath[resourceIndex] && (
                <div className="subpath-form-container">
                    <AddSubPath parentPathId={pathId} resourceIndex={resourceIndex} />
                </div>
            )}

            <SubPathList 
                subPaths={resource.subPaths} 
                pathId={pathId}
                resourceId={resource.id}  
            />
        </div>
    )
}