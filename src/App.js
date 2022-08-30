import './App.css';
import { 
  Navbar,
  PersonalInfo,
  Projects,
  Work,
  Contact,
 } from "./components";
 import { Route, Routes } from 'react-router-dom'

const style = {
  app: {
    backgroundColor: "#404040",
    color: "lime"
  }
}
function App() {

  return (
    <div style={style.app}>
      <Navbar />
      <PersonalInfo />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
