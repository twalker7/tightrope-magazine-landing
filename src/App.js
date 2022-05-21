import './App.css';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../src/components/Header';
import Content from '../src/components/Content';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Content/>

      <Footer/>
    </div>
  );
}

export default App;
