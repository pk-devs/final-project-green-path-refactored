import { useSelector } from "react-redux"
import { useState } from "react"
import { PathItem } from "./PathItem"
import { NewPathFormButton } from "../utility/NewPathFormButton"

import "./PathList.css"

export const PathList = () => {
  const paths = useSelector((state) => state.paths.items)
  const [filter, setFilter] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPaths = paths.filter((path) => {
    const pathTags = path.tags ? path.tags.map(tag => tag.toLowerCase()) : []
    const pathQuestion = path.question.toLowerCase()

    const filterMatch = filter ? pathTags.includes(filter.toLowerCase()) : true
    const searchMatch = searchTerm ? pathQuestion.includes(searchTerm.toLowerCase()) : true

    return filterMatch && searchMatch
  })

    console.log("From PathList:", filteredPaths)  
  
  return (
    <div className="parent-list-paths">
      <h2 className="list-paths-heading">Explore the paths, add your resources to deep dive</h2>

      <div className="filter-paths-buttons">
        <button className="button" onClick={() => setFilter("atmosphere")}>Atmosphere</button>
        <button className="button" onClick={() => setFilter("Ocean")}>Ocean</button>
        <button className="button" onClick={() => setFilter("Renewable energy")}>Renewable energy</button>
        <button className="button-clear" onClick={() => setFilter("")}>Clear Filter</button>
      </div>
      <div className="filter-paths-search-bar">
        <input 
        type="text" 
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
        />
      </div>
      <div className="new-path-form-button-container">
        <NewPathFormButton />
      </div>
      
      {filteredPaths.length > 0 ? (
        <div className="paths-container">
            {filteredPaths.map((path) => (
              <PathItem key={path.id} path={path} />
            ))}
          </div>
          ) : (
            <div className="no-paths-message">
              <p>There are no paths for this yet...</p>
              <NewPathFormButton />
            </div>
          )}
    </div>
  )
}
