import './App.css';
import Grid from '@mui/material/Grid';


import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>

      <Footer/>
    </div>
  );
}

export default App;
