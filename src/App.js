import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUsPage from './pages/about';
import PricingPage from './pages/pricing';
import BlogPage from './pages/blog';
import SignUpPage from './pages/signup';
import LoginPage from './pages/login';


function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path ='/about' element={<AboutUsPage />} exact />
      <Route path ='/pricing' element={<PricingPage />} exact />
      <Route path ='/blog' element={<BlogPage />} exact />
      <Route path ='/signup' element={<SignUpPage />} exact />
      <Route path ='/login' element={<LoginPage />} exact />
     </Routes>
    </Router>
  );
}

export default App;
