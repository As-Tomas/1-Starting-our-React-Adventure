//import Content from "./components/Content/Content";
import ContentList from "./components/Content/ContentList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<ContentList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <button className="border rounded-lg px-4" onClick={() => setIsOpen(true)}>Open Modal</button>
        <Footer />
      </div>
      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      Lars Gunnar
      </Modal>
    </>
  );
}

export default App;
