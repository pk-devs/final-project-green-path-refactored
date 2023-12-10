import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { PathDetails } from "./PathDetails"
import { ResourceForm } from "./resources/ResourceForm"
import { ResourceList } from "./resources/ResourceList"
import { Sidewidget } from "../sidewidget/Sidewidget"
import "./Path.css"

export const Path = () => {
    const { pathId } = useParams()
    const path = useSelector(state => state.paths.items.find(path => path.id === pathId))
    const [showAddSubPath, setShowAddSubPath] = useState({})
    const dispatch = useDispatch()

    const handleAddSubPathClick = (resourceIndex) => {
        setShowAddSubPath(prevState => ({
            ...prevState,
            [resourceIndex]: !prevState[resourceIndex]
        }))
    }

    if (!path) {
        return <div>Path not found...</div>
    }

    return (
        <div className="path-page">
            <div className="path-detail">
                <PathDetails path={path} />
            </div>
            <ResourceForm pathId={pathId} dispatch={dispatch} />
            <div className="path-content">             
                <ResourceList 
                    pathId={pathId}
                    resources={path.resources} 
                    dispatch={dispatch} 
                    showAddSubPath={showAddSubPath} 
                    onAddSubPathClick={handleAddSubPathClick} 
                />
                <Sidewidget />
            </div>
        </div>
    )
}
