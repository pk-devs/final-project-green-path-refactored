import { useState } from "react"
import { useDispatch } from "react-redux"
import { addResource } from "../../redux/reducers/pathSlice"
import "./ResourceForm.css"

export const ResourceForm = ({ pathId }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [comment, setComment] = useState("")
    const [showAddResource, setShowAddResource] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addResource({
            pathId,
            title,
            link,
            comment
        }))
        setTitle("")
        setLink("")
        setComment("")
    }

    return (
        <div className="resource-form-container">
            {showAddResource ? (
                <form onSubmit={handleSubmit}>
                    <h2>Add a new resource to this path</h2>
                    <input 
                        type="text" 
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Add a resource title"
                        maxLength={200}
                        required
                    />
                    <textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        placeholder="Add a comment"
                        maxLength={450}
                    />
                    <input 
                        type="text" 
                        value={link}
                        onChange={(event) => setLink(event.target.value)}
                        placeholder="Add a resource link"
                        required
                    />
                    <button type="submit">Add resource</button>
                    <button onClick={() => setShowAddResource(false)}>Cancel</button>
                </form>
                ) : ( 
                <button className="button" onClick={() => setShowAddResource(true)}>Add a new resource</button>
                )}
        </div>
    )
}

