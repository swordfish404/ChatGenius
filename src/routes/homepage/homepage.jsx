import './homepage.css';
import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className='homepage'>
          <img src="/orbital.png" alt="" className="orbital"/>
            <div className="left">
                <h1>ChatGenius</h1>
                <h2>Supercharge your creativity and productivity</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi dicta, quis non cum deserunt velit minima, aliquam eligendi, blanditiis molestias. Placeat molestias et voluptas dolore exercitationem ipsa rerum consequuntur.</h3>
                <Link to="/dashboard" onClick={console.log("hi")}>Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                       <div className="bg"></div> 
                       <img src="/bot.png" alt="" className="bot"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
 