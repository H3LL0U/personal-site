import Header from "./components/header/header"
import ContentSection from "./components/contentSection/ContentSection"
import ColorTransition from "./components/color_transition/color_transition"
import Card from "./components/Card/Card"
import MagisterPy from "./assets/MagisterPy.png";
import Footer from "./components/footer/footer";
import HookImg from "./assets/favicon.ico"
import ScrollableCard from "./components/ScrollableCard/ScrollableCard";
import { SocialIcon } from "react-social-icons";
import "./animations.css"
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
    
    <ContentSection label= {<> <span className="fly-back-container">
  Whoami
  <span className="fly-back fly-away">?</span>
</span></>} label_style={{fontSize: "4em", userSelect:"none"}}>
      
    <ContentSection label="">
      
    </ContentSection>  
    <ScrollableCard
      title="My projects"
      content={[
        { label:
        <>
        <a href="https://github.com/H3LL0U/MagisterPy" target="_blank">
        <img src={MagisterPy}
        style={{width:"20%", minWidth: "200px  "}} 
        alt="MagisterPy" />
        </a>
        </>
        ,content: 
        <Card style={{margin: "auto"}}> 
      <h1 className="text">MagisterPy: Your Magister Account, Simplified</h1>

      <h2 className="text">What is MagisterPy?</h2>
      <p>MagisterPy is an unofficial python package that allows you to interact with Magister API using python!</p>

      <p>Whether you're a student aiming to automate checking your schedule or grades, or someone who just wants a quick way to access this information, MagisterPy makes it possible with only a few lines of code.</p>

      <h2 className="text">What Can You Do with MagisterPy?</h2>
      <p>MagisterPy enables you to easily retrieve your school timetable for any date range, check your most recent grades, and automate tasks that would normally take time to do manually. This is especially helpful if you're frequently checking for updates to your school schedule or progress in your studies.</p>

      <h2 className="text">Who Is This For?</h2>
      <p>MagisterPy is particularly useful for students who want to streamline their school-related tasks. If you're tired of manually checking your schedule or grades, this library can help automate that process.</p>

      <p>It's also helpful for educators and developers looking to integrate Magister data into their own projects or systems. Whether you're building a custom tool or just need to access Magister data programmatically, MagisterPy is a great solution.</p>

      <h2 className="text">How Does It Work?</h2>
      <p>Once installed, MagisterPy allows you to log in to your Magister account and easily retrieve your schedule and grades. It simplifies these tasks, so you don’t have to manually navigate the Magister platform. With just a few simple commands, you can access all the information you need.</p>
        </Card>},
        { label:
        <>
          <a href="https://github.com/users/H3LL0U/projects/8" target="_blank">
          <h1 style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={HookImg} alt="Hook" style={{ maxWidth: "3%", height: "auto" }} />
              Phishing awareness website
            <img src={HookImg} alt="Hook" style={{ maxWidth: "3%", height: "auto" }} />
          </h1>
          </a>
        </>
          
        
        ,
           content:  
        <Card style={{margin: "auto"}}>
    
          

    <h1>Project Goal</h1>
    <p>The goal of this project is to investigate the effectiveness of phishing attacks and social engineering via email, while simultaneously teaching users how to recognize and avoid these attacks. The project focuses on raising awareness about the methods used by attackers to deceive victims, as well as providing practical guidelines and strategies to identify phishing attempts.</p>

    <h2>How the Project Achieves This</h2>
    <p>The project collects and sends emails to students, each with a unique link to a website. When users visit the site, they are confronted with a login page, which they can only access via the provided link. As soon as they begin typing in the password field, they are redirected to an informative page that explains the mistake and provides tips for recognizing phishing attacks.</p>
    <p>To store user data, the project uses MongoDB. Information like the time of visit, whether the user began typing, and email details are collected. All emails are securely encrypted to ensure privacy.</p>
    
    <p>Through this process, the project aims to help users better identify phishing attempts and learn how to protect themselves online.</p>
    
          
         </Card>
          },
        { label: <a href="https://github.com/H3LL0U/Shadow-game-prjct"><h1>Shadow game: Escape from dystopia</h1> </a>, 
          content: <Card style={{margin:"auto"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
          <img src="https://raw.githubusercontent.com/H3LL0U/Shadow-game-prjct/refs/heads/main/assets/sprites/Characters/main_character/stationary%20no%20borders%20guy.png" alt="main character"  style={{width:"15%"}}/>
          <img src="https://raw.githubusercontent.com/H3LL0U/Shadow-game-prjct/refs/heads/main/assets/sprites/Characters/military%20man/static%20military%20man.png" alt="main character"  style={{width:"15%"}}/>
          </div>
          <div>
          <h2>What is Shadow Game: Escape from Dystopia?</h2>
    <p><strong>Shadow Game: Escape from Dystopia</strong> is a 2D stealth and puzzle game made with the godot engine played from a top-down perspective. In the game, you play as an unnamed protagonist who must escape from the oppressive and dystopian land of Dystopiania to the free, utopian world of Utopiania.</p>
    <h2>Core Gameplay</h2>
    <p>At its core, <strong>Shadow Game: Escape from Dystopia</strong> is about using stealth and strategy to overcome obstacles. Players must rely on their environment to help them hide and avoid being seen. Tools such as keys and bushes are used to either hide or unlock doors that help progress through the levels.</p>
    <p>Throughout the game, players need to time their movements carefully, using stealth to move undetected by patrolling guards. The game often includes monologues and dialogues between the protagonist and guards, and uses dry humor.</p>

    <h2>Game Environment</h2>
    <p>The game is set on the borders of different countries, featuring a variety of environments, such as buildings, wire fences, and dense bushes. You must use the objects on each level to your advantage in order to progress through the levels.</p>

    <h2>Target Audience</h2>
    <p><strong>Shadow Game: Escape from Dystopia</strong> is primarily aimed at teenagers but is suitable for all players who enjoy a blend of stealth, puzzle-solving, and storytelling. Though it is not very long (around 15 minutes) it can still be fun.</p>

          </div>
          </Card>},{
            label: <h1>And more...</h1>,
            content: <Card style={{justifyContent:"center", textAlign: "center", margin:"auto", alignItems: 'center' }}><h1>You can find more projects if you visit my github</h1> 
            <SocialIcon 
            network="github" 
            href="https://github.com/H3LL0U" 
            style={{ width: "30vw", height: "30vw" }} 
          /> </Card>
          }

        
      ]}
/>
    </ContentSection>
    
    <ColorTransition from="#111111" to={footerbgcolor}></ColorTransition>
    <Footer name="H3LL_0U" style={{backgroundColor: footerbgcolor}} contact_links={contact_links}>

    </Footer>

    </>

    
  )
}

export default Profile
