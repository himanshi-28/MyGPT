import {Routes, Route, Navigate} from 'react-router-dom';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Register from './pages/register';
import Login from './pages/login';
import {Toaster} from "react-hot-toast";
import Summary from './pages/Summary';
import Paragraph from './pages/paragraph';
import Chatbot from './pages/Chatbot';
import Timecomplexity from './pages/timecomplexity';
import Grammar from './pages/grammar';
import Sql from './pages/sql';

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  const authToken = localStorage.getItem('authToken');

  return (
    <>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <Toaster/>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/summary" element={<Summary/>} />
          <Route path="/paragraph" element={<Paragraph/>} />
          <Route path="/Chatbot" element={<Chatbot/>} />
          <Route path="/timecomplexity" element={<Timecomplexity/>} />
          <Route path="/grammar" element={<Grammar/>} />
          <Route path="/sql" element={<Sql/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
