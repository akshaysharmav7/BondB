import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Illustrations from './pages/Illustrations';
import Sounds from './pages/Sounds';

function App() {
  return (
   <>
   //Hello
      <Router>
          <Routes>
              <Route path='/' element={<Illustrations/>}/>
              <Route path='/sounds' element={<Sounds/>}/>
          </Routes>
      </Router>
   </>
  );
}

export default App;
  