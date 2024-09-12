import './chatList.css';
import { Link } from 'react-router-dom';


const ChatList = () => {
    return (
        <div className='chatList'>
              <span className="title">DASHBOARD</span>
              <Link to="/dashboard">Create a new Chat</Link>
              <Link to="/">Explore ChatGenius</Link>
              <Link to="/">Contact</Link>
              <hr/>
              <span className="title">RECENT CHATS</span>
                  <div className="list">
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>
                    <Link to="/">My Chat title</Link>                                 


                  </div>

                  <hr/>
              
              <div className="upgrade">
                <img src="/black.jpg" alt="" />
                <div className="texts">
                    <span>Upgrade Yourself</span>
                    <span>By using the power of ChatGenius</span>


                </div>
              </div>
              
            </div>
    );
}

export default ChatList;
