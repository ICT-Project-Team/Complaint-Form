import logo from './logo.svg';
import './App.css';
import FormComplain from './pages/FormComplain';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container-fluid'>
        <br/>
        <FormComplain />
        <br/>
      </div>
    </div>
  );
}

export default App;
