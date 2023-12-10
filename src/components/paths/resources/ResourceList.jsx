import { ResourceItem } from "./ResourceItem"
import "./ResourceList.css"

export const ResourceList = ({ resources, pathId, showAddSubPath, onAddSubPathClick }) => {
    if (resources.length === 0) {
        return <div className="no-resource">No resources available.</div>
    }

    return (
        <div className="parent">
            <div className="resource-list-container">
                <h2>Resources where to find more information</h2>
                {resources.map((resource, index) => (
                <ResourceItem
                    key={resource.id}
                    pathId={pathId}
                    resource={resource}
                    resourceIndex={index}
                    showAddSubPath={showAddSubPath}
                    onAddSubPathClick={onAddSubPathClick}
                />
                ))}
            </div>
        </div>
    )
}


