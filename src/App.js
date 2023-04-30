import logo from './logo.svg';
import './App.css';
import Chat from '../components/chat';
import LoginForm from '../components/login';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <Chat />
    </div>
  );
}

export default App;
