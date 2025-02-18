import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Illustrations from './pages/Illustrations';
import Sounds from './pages/Sounds';
import Blogs from './pages/Blogs';

function App() {
  return (
   <>
      <Router>
          <Routes>
              <Route path='/' element={<Illustrations/>}/>
              <Route path='/sounds' element={<Sounds/>}/>
              <Route path='/blogs' element={<Blogs/>}/>
          </Routes>
      </Router>
   </>
  );
}

export default App;
  