import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register'
import Login from './Login';
import Projects from './Projects';
import Profile from './Profile';
import Main from './Main';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path='projects' element={<Projects />}/>
        <Route path='profile' element={<Profile />} />
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;