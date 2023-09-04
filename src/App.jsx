import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';

// PAGES
import AuthPage from './pages/AuthPage/AuthPage';
import Home from './pages/Home/Home';
import NewNote from './pages/NewNote/NewNote';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
//------------

// components
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewNote />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
