import Header from "./components/Header";
import {Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import User from "./pages/user/User";
import Contact from "./pages/contact/Contact";
import "./app.css"

function App() {
  return (

    <div className="App">
     
     <Footer />
     <Routes>
       <Route path="/" element={<Header />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
       <Route path="user" element={<User />} />
     </Routes>
     <Footer />
    </div>

  );
}

export default App;
