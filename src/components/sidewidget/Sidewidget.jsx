import { SidewidgetNews } from "./SidewidgetNews"
import { SidewidgetPathList } from "./SidewidgetPathList"
import "./Sidewidget.css"

export const Sidewidget = () => {
  
  return (
    <div className="sidewidget">
        <div>
          <SidewidgetPathList />
        </div>
        <div>
          <SidewidgetNews />
        </div>
    </div>
  )
}
