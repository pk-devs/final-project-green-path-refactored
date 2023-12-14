import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addPath, resetLastAddedPathId } from "../../reducers/pathSlice"
import "../styles/FormStyles.css"

export const AddPathForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const lastAddedPathId = useSelector(state => state.paths.lastAddedPathId)

    const [question, setQuestion] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addPath({
            question: question,
            description: description,
            tags: tags
        }))

        setQuestion("")
        setDescription("")
        setTags("")
    }

    useEffect(() => {
        if(lastAddedPathId) {
            navigate(`/path/${lastAddedPathId}`)
            dispatch(resetLastAddedPathId())
        }
    })

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="question">Path initial question</label>
            <input 
                id="question"
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                maxLength={140}
                placeholder="max 140 characters..."
                required
            />
            <label htmlFor="description">Description</label>
            <textarea 
                id="description"
                value={description}
                maxLength={450}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="max 450 characters..."
                required
            />
            <label htmlFor="tags">Add tags</label>
            <input 
                type="text"
                id="tags"
                value={tags}
                onChange={(event) => setTags(event.target.value)}
            />
            <button className="button" type="submit">Add path</button>   
        </form>
    )
}