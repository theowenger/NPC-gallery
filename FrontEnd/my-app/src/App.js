//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

//pages:
import Home from './pages/home';
import Index from './pages';
import NPCView from './pages/NPCView';
import About from './pages/about';
import CreateNPC from './pages/createNPC';
import ModifyNPC from './pages/modifyNPC';
import Users from './pages/users';
import UserView from './pages/userView';
import PageNotFound from './pages/pageNotFound';
import Signup from "./pages/signup"
import Login from './pages/login';

//Component:
import Header from './components/header';
import Footer from './components/footer';

//CSS:
import '../src/assets/css/header.css'

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/createNPC" element={<CreateNPC />} />
          <Route path="/modifyNPC" element={<ModifyNPC />} />
          <Route path="/NPC/:id" element={<NPCView />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/User/:id' element={<UserView />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
