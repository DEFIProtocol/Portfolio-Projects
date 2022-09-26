import './App.css';
import { 
  Navbar,
  PersonalInfo,
  Projects,
  Work,
  Contact,
 } from "./components";
 import { Route, Routes } from 'react-router-dom';
 import { Layout} from "antd";

function App() {

  return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className= "main">
          <Layout>
            <div className="routes">
            <Routes> 
              <Route path = "/About" element={<PersonalInfo />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            </div>
          </Layout>
        </div>
        
      </div>
  );
}

export default App;
