import './App.css';
import Post from "./post";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      
    </Routes>
  );
}

export default App;
