import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import About from "./routes/About";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import LoginRegister from "./routes/LoginRegister";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/LoginRegister" element={<LoginRegister  />}/>
    </Routes>
    </div>
  );
}

export default App;
