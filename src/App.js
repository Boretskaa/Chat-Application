import  {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import './App.css';
import ChatFeed from './components/ChatFeed'

const projectID = "23f6483b-4ce7-4880-82c6-ba0b5e457910";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm></LoginForm>

    return (
        <ChatEngine
            height = "100vh"
            const projectID = "23f6483b-4ce7-4880-82c6-ba0b5e457910"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;