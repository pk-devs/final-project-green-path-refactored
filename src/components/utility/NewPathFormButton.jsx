import { useState } from 'react'
import { AddPathForm } from "../paths/AddPathForm"
import "./NewPathFormButton.css"

export const NewPathFormButton = () => {
    const [showAddPathForm, setShowAddPathForm] = useState(false)  

    return (
        <div>
            <button className="button" onClick={() => setShowAddPathForm(!showAddPathForm)}>
                {showAddPathForm ? "Hide" : "Add new path" }
            </button>
            
            {showAddPathForm && (
                <div className="form-container">
                    <AddPathForm />
                </div>
            )}
        </div>
    )
}