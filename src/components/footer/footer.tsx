
import { CSSProperties } from 'react'
import { ReactNode } from 'react'
import { SocialIcon } from 'react-social-icons'
type ContactLink = {
  platform: string;
  url: string;
};
interface Prop{
    name?:string,
    children?:ReactNode,
    style?:CSSProperties,
    icon_container_style?: CSSProperties
    contact_links?: ContactLink[]
}
const Footer = ({style, contact_links = [], icon_container_style = {}}:Prop) => {

    let default_style:CSSProperties ={
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#111111",
            
            ...style
          };
    let default_icon_container_style:CSSProperties = {
      display: "flex",
      alignItems:"center",
      textAlign:"center",
      marginTop:"2%",
      marginBottom:"2%",
      gap: "1em ",
      ...icon_container_style
    }
  return (

    <div style={default_style}>
    <h1>You can find me here!</h1>
    <div style={default_icon_container_style}>
    {contact_links.map((link, index) => (
  <div key={index} >
    <SocialIcon url={link.url} network={link.platform} />
    
  </div>
))}
      
    </div>
      
        
        

    </div>
  )
}

export default Footer