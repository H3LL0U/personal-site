import Header from "./components/header/header"
import ContentSection from "./components/contentSection/ContentSection"
import ColorTransition from "./components/color_transition/color_transition"
import Card from "./components/Card/Card"
import MagisterPy from "./assets/MagisterPy.png";
import Footer from "./components/footer/footer";
import HookImg from "./assets/favicon.ico"
function Profile() {
  let headerbgcolor = "#232324"
  let mainsectionbgcolor = "#111111"
  let footerbgcolor = "#060c2b"
  
  type ContactLink = {
    platform: string;
    url: string;
  };
  const contact_links:ContactLink[] = [
    { platform: "discord", url: "https://discordapp.com/users/492706304423362570" },
    { platform: "github", url: "https://github.com/H3LL0U"}

  ];
  return (
    <>
    <Header name='<h1>H3LL<span class="hover-text">_</span>0U</h1>' 
      style={{backgroundColor: headerbgcolor

    }}
    img_src="https://avatars.githubusercontent.com/u/151795050?v=4"
    >
     <h2 className="description">I'm a Python-focused developer passionate about building clean, useful software - from web apps, reusable packages to games. I love to learn new things by setting up personal projects!</h2>
    </Header>
    <ColorTransition from={headerbgcolor} to={mainsectionbgcolor} height="50px"></ColorTransition>
    
    <ContentSection label="Whoami" label_style={{fontSize: "4em"}}>
      
    <ContentSection label="My projects">
      
    </ContentSection>  
    <Card> 
    <div style={{width:"100%", textAlign:"center"}}>
      <img src={MagisterPy}
      style={{width:"20%", minWidth: "200px  "}} 
      alt="MagisterPy" />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum dolorum tempora corporis tempore distinctio tenetur similique magni. Mollitia porro maxime officiis veniam est voluptatum! Delectus numquam iusto omnis inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, natus quos laborum consequuntur cum iste nesciunt velit ea in vitae voluptates sint ut maiores fuga nostrum labore atque et praesentium? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta cum obcaecati perspiciatis commodi nulla praesentium magnam, consequuntur reiciendis, repudiandae illo suscipit perferendis vitae magni, aliquid modi minima laboriosam totam maiores?</p>
    </Card>
    <Card>
    
      <div style={{ width: "100%", textAlign: "center" }}>
    <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
      <img src={HookImg} alt="Hook" style={{ width: "5%" }} />
      Phishing awareness website
      <img src={HookImg} alt="Hook" style={{ width: "5%" }} />
    </h1>
    <p>	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsum adipisci animi earum repellat pariatur non iure consequuntur? Excepturi ab quam et quasi obcaecati maxime earum, eum voluptatum officiis molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla repellat aliquid, optio assumenda necessitatibus numquam quisquam neque quam ex fugit perspiciatis illo laboriosam vero cum labore harum sit odit eligendi?</p>
  </div>
    </Card>
    </ContentSection>
    
    <ColorTransition from="#111111" to={footerbgcolor}></ColorTransition>
    <Footer name="H3LL_0U" style={{backgroundColor: footerbgcolor}} contact_links={contact_links}>

    </Footer>

    </>

    
  )
}

export default Profile
