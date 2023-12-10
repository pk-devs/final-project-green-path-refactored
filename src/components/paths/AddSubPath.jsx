import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSubPath } from "../redux/reducers/pathSlice"
import "./AddSubPath.css"

export const AddSubPath = ({ parentPathId, resourceIndex }) => {
    const [subpathQuestion, setSubpathQuestion] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addSubPath({ 
            parentPathId,
            resourceIndex,
            subpath: subpathQuestion, 
            description,
            tags: tags
        }))
        setSubpathQuestion("")
        setDescription("")
        setTags("")
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="subpathQuestion">What is the Sub-Path question?</label>
                <input 
                    id="subpathQuestion"
                    type="text"
                    value={subpathQuestion}
                    onChange={(event) => setSubpathQuestion(event.target.value)}
                    maxLength={140}
                    placeholder="max 140 characters..."
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Add a description</label>
                <textarea 
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    maxLength={450}
                    placeholder="max 450 characters..."
                    required
                />
            </div>
            <div>
                <label htmlFor="tags">Add tags</label>
                <input 
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                     />  
            </div>
            <button type="submit">Add new sub-path</button>
        </form>
    )
}