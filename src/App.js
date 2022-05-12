import logo from './logo.svg';
import './App.css';
import FormComplain from './pages/FormComplain';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Submitted from './pages/Submitted';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<FormComplain />} />
        <Route path='/submitted' element={<Submitted />} />
      </Routes>
    </div>
  );
}

export default App;
