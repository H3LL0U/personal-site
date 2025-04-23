import "./header.css"
function Header({ name, children ,style = {}, img_src = ""}: 
  { name: string , children: React.ReactNode , style?: React.CSSProperties; img_src?:string }) {

    return (
      <>
      <header className="header" style={style}>
        <div className="img-container">
          <img className="main_image" src= {img_src} alt={`${name} profile picture`}/>
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
  