import { useNavigate } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    const navigate = useNavigate()
    const goHome = () => {
      navigate("/")
    }

    return (
      <div className="header" aria-label="Background imgage of at path in the forest">
          <button className="home-button" onClick={goHome}> HOME </button>
          <div className="header-content">
              <h1>
                The Green Path platform helps you to stay organised in a sea of information, 
                follow a paths or create your own to help the planet and to share your knowledge
              </h1>
          </div>
      </div>
    )
}
