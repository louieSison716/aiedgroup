import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './frontend/pages/home/index'
import About from './frontend/pages/about/index'
import Services from './frontend/pages/services/index'
import News from './frontend/pages/news/index'
import Invest from './frontend/pages/invest/index'
import Portfolio from './frontend/pages/portfolio/index';
import ContactUs from './frontend/pages/contactus';
import styles from './index.scss'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
         </Routes>
      </Router>
    </>
  );
}

export default App;
