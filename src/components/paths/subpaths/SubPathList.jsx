import { SubPathItem } from "./SubPathItem"
import "./SubPathList.css"

export const SubPathList = ({ subPaths, pathId, resourceId }) => {

    const hasSubPaths = subPaths && subPaths.length > 0
    
    return (
        <div className="parent-list-subpaths">
            <div className={hasSubPaths ? "list-subpath" : ""}>
                {subPaths.map(subPath => (
                    <SubPathItem 
                        key={subPath.id} 
                        subPath={subPath}
                        pathId={pathId}
                        resourceId={resourceId}
                    />
                ))}
            </div>
        </div>
    )
}

