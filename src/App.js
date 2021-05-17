import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Button} from 'react-bootstrap';


class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state ={
      Person: {
        FullName:"Amel Boughattas",
        bio: " After I got my professional master's degree in information systems engineering and despite unemployment, I was eager to learn the skills and I had hope because there are opportunities in life until I came up with this opportunity, i found my way in web developper",
        imgSrc:"123.png",
        profession: "Full-stack developer",
      },
      time:0,
      show:false,
      s: 'Show',
     
    }
   }  
    
     handleClick = () => { 
       this.setState({show: !this.state.show , time:0});
        if (this.state.show===false) {
          this.setState({show: true});
          this.setState({s: 'Hide'});
        }
        else if (this.state.show===true) {
          this.setState({show: false}); 
          this.setState({s: 'Show'});
        }
     }
     
     componentDidMount(){
      setInterval( ()=> {
        this.setState({ time: this.state.time +1 })
      } ,1000  )}
    
    styleImg = {
      borderradius: "10px"
    }
                      
                      
 render()
 {     const {FullName, bio, imgSrc, profession} = this.state.Person;
   return (
     <div className="App">

       {/* NavBar */}
        <div className="content" >
  
          <Container>
            <Navbar  className="App-nav" expand="lg"  >
              <Navbar.Brand href="#">HOME</Navbar.Brand>
              <Navbar.Brand href="#">ABOUT</Navbar.Brand>
              <Navbar.Brand href="#" >CONTACT</Navbar.Brand>
            </Navbar>
          </Container>
     
        </div>

         {/*the person's profile */}
        <div>
         <div className={this.state.show ? "visible" : "hide"}> 
         
            
            <div  className="contenu" >
              <p className="img">
                <span className="styleImg"><img src={imgSrc} alt=""  /></span>
              </p>

              <div className="parg">
                <p>My name is <span style={{fontWeight:"bold"}}>{FullName}</span></p>
                <p>Bio :{bio} </p>
                <p>Profession : I'm a <span className="profession">{profession} </span></p>
              </div> 
           </div>
        
           <div className="time">
             <h3>The last component was mounted since :{this.state.time}</h3>
           </div>

         </div>

          <div className="visible">
             <Button variant="warning" onClick={this.handleClick} style={{color:"#bb0202", marginTop:"30px", fontWeight:"bold", width:"170px",height:"50px"}}>
                {this.state.s} 
             </Button>
          </div>
   
        </div>
     </div>
   )
 }
}

export default App