import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/start';
import LoginPage from './pages/login';
import LoginPageT from './pages/logint';
import SignUpPage from './pages/signup';
import ChoosePage from './pages/choose';
import CleaningPage from './pages/cleaning';
import DateTimePage from './pages/datetime';
import HomePage from './pages/home';
import HomeTPage from './pages/homet';
import SelectServicePage from './pages/select';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logint" element={<LoginPageT />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/choose" element={<ChoosePage />} />
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/datetime" element={<DateTimePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/homet" element={<HomeTPage />} />
          <Route path="/select" element={<SelectServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
