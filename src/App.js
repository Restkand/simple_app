import React, { useState, useEffect } from 'react';
import Home from './components/home';
import About from './components/about';

function App() {
  const [page, setPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPage(window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setPage(path);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          </li>
          <li>
            <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>About</a>
          </li>
        </ul>
      </nav>
      {page === '/' && <Home />}
      {page === '/about' && <About />}
    </div>
  );
}

export default App;
