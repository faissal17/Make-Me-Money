import './App.css';
import './index.css';
import Register from './components/Authentication/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/Register" Component={Register} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
