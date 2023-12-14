import { PathList } from "./paths/PathList"
import { ClimateNews } from "./news/ClimateNews"
import { ClimateNewsHardCoded } from "./news/ClimateNewsHardCoded"

export const Home = () => {
  return (
    <div className="home-container">
        <PathList />
        <ClimateNews />
        <h1>HardCoded:</h1>
        <ClimateNewsHardCoded />
    </div>
  )
}
