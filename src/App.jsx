import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Main from './Pages/Main';
import './App.css';
import BeybladeParts from './Pages/BeybladeParts';
import CreateABeyblade from './Pages/CreateABeyblade';

function App() {
  return (
    <main>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Create-A-Beyblade' element={<CreateABeyblade />} />
        <Route path='/Beyblade-Parts' element={<BeybladeParts />} />
      </Routes>
    </main>
  );
}

export default App;
