import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Principal from "./components/Principal";
import AppProvider from "./providers/AppProvider";
import "./css/App.css";
import SingUp from "./components/SingUp";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
