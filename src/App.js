import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import EmailForm from './components/EmailForm';


export default function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <MySkills/>
      <MyProjects/>
      <EmailForm/>
    </>
  );
}
