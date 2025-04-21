import "./header.css"
import ProfileImage from "../../assets/H3LL0U.png"
function Header({ name, children }: { name: string; children: React.ReactNode }) {

    return (
      <>
      <header className="header">
        <div className="img-container">
          <img src={ProfileImage} alt={`${name} profile picture`}/>
        </div>

        <div className="header-container">
        <h1 className="logo" dangerouslySetInnerHTML={{ __html: name }}></h1>

        
        
          {children}
        </div>

        
          
        

      </header>
      </>
    )
  }
  
  export default Header
  