import Header from "./components/header/header"
import ContentSection from "./components/contentSection/ContentSection"
import ColorTransition from "./components/color_transition/color_transition"
import Card from "./components/Card/Card"
import MagisterPy from "./assets/MagisterPy.png";
import Footer from "./components/footer/footer";
import HookImg from "./assets/favicon.ico"
import ScrollableCard from "./components/ScrollableCard/ScrollableCard";
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
          <h1 style={ {textAlign:"center", display:"flex", justifyContent:"center"}}>
                <img src={HookImg} alt="Hook" style={{ width: "5%", minWidth:"75px"}} />
                 Phishing awareness website
                <img src={HookImg} alt="Hook" style={{ width: "5%", minWidth:"75px"}} />
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
        { label: <h1>Escape from dystopiania</h1>, 
          content: <Card style={{}}>
            <div style={{display:"flex", justifyContent:"center"}}>
          <img src="https://raw.githubusercontent.com/H3LL0U/Shadow-game-prjct/refs/heads/main/assets/sprites/Characters/main_character/stationary%20no%20borders%20guy.png" alt="main character"  style={{width:"15%"}}/>
          <img src="https://raw.githubusercontent.com/H3LL0U/Shadow-game-prjct/refs/heads/main/assets/sprites/Characters/military%20man/static%20military%20man.png" alt="main character"  style={{width:"15%"}}/>
          </div>
          </Card>},
        // ... more items
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
