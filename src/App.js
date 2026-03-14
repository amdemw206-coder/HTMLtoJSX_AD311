import './App.css';
import {UserProfile} from './components/userprofile';

function App() {
  const userData = {
    name: "Jane Doe", 
    email: "jane.doe@example.com"  
  };
  return (
   <UserProfile userProfile={userData}/>
  );
}

export default App;
