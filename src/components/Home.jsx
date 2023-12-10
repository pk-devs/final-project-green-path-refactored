import { PathList } from "./paths/PathList"
import { ClimateNews } from "./news/ClimateNews"

export const Home = () => {
  return (
    <div className="home-container">
        <PathList />
        <ClimateNews />
    </div>
  )
}
