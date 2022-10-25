import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
// import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CreateTimeSheetPage from './pages/CreateTimeSheetPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Dashboard/>}>
            <Route index element={<HomePage />} />
            <Route path="/createTimesheet" element={<CreateTimeSheetPage />} />
          </Route>
        </Routes>
    
    {/* <Login/> */}
    </>
  );
}

export default App;
