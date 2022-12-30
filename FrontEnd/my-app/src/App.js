//Framework
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

//pages:
import Index from './pages';
import NPCView from './pages/NPCView';
import About from './pages/about';
import CreateNPC from './pages/createNPC';
import Users from './pages/users';
import UserView from './pages/userView';
import PageNotFound from './pages/pageNotFound';

//Component:
import Header from './components/header';
import Footer from './components/footer';

//CSS:
import '../src/assets/css/header.css'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/createNPC" element={<CreateNPC />} />
          <Route path="/NPC/:id" element={<NPCView />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/User/:id' element={<UserView />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
