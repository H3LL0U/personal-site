import "./mainSection.css"
function MainSection({label, children}:{label:string, children:React.ReactNode}){
    return(
        <div className="mainpage">
            <h1>{label}</h1>
            
            {children}
        </div>


    )

}
export default MainSection