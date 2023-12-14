import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import "./SidewidgetPathList.css"

export const SidewidgetPathList = () => {
  const paths = useSelector((state) => state.paths.items) 
  console.log("this is from SidewiggetPathList:", paths)
  return (
    <div className="sidewidget-path-list">
      <h2>Other paths</h2>
      <ul>
        {paths?.map((path) => (
         <Link key={path.id} to={`/path/${path.id}`}> 
            <li className="path-title">
              {path.question}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}




