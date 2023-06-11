import Content from "./components/Content/Content";
import ContentList from "./components/Content/ContentList";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/home" element={<ContentList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
