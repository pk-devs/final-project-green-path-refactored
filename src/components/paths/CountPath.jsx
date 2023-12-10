import { useSelector } from 'react-redux'
import "./CountPath.css"

export const CountPath = ({ currentPathId }) => {
    const path = useSelector(state => state.paths.items.find(path => path.id === currentPathId))
    
    if (!path) {
        return <div>Path not found...</div>
    }

    // Counting resources
    const totalResources = path.resources.length
    const totalCompletedResources = path.resources.filter(resource => resource.completed).length
    const totalUncompletedResources = totalResources - totalCompletedResources

    // Counting sub-paths
    const totalSubPaths = path.resources.reduce((total, resource) => total + resource.subPaths.length, 0)
    const totalCompletedSubPaths = path.resources.reduce((total, resource) => 
        total + resource.subPaths.filter(subPath => subPath.completed).length, 0)
    const totalUncompletedSubPaths = totalSubPaths - totalCompletedSubPaths

    return (
        <div className="counter">
            <h2>Progress summary</h2>
            <div className="counter-path">
                <div>
                    <h3>Resources</h3>
                    <p>Total: <span>{totalResources}</span></p>
                    <p>Completed: <span>{totalCompletedResources}</span></p>
                    <p>Left to read: <span>{totalUncompletedResources}</span></p>
                </div>
                <div>
                    <h3>Sub-paths</h3>
                    <p>Total: <span>{totalSubPaths}</span></p>
                    <p>Completed: <span>{totalCompletedSubPaths}</span></p>
                    <p>Left to read: <span>{totalUncompletedSubPaths}</span></p>
                </div>
            </div>
        </div>
    )
}