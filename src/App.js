import './App.css';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../src/components/Header';
import Content from '../src/components/Content';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
      <Content/>

    </div>
  );
}

export default App;
