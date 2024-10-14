import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Footer_comp } from './components/Footer_comp';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Pagination from './components/pagination';
import PaginatedLinks from './components/PaginatedLinks'; // Import PaginatedLinks component
import About from './components/About';
import postData from '../public/assets/data.json';
import linkData from '../public/assets/linkdata.json';

// Custom hook to handle reload-to-home behavior
function useReloadToHome() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('reloading', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem('reloading') === 'true') {
      sessionStorage.removeItem('reloading');
      if (location.pathname !== '/') {
        navigate('/', { replace: true });
      }
    }
  }, [navigate, location]);
}

function App() {
  const [sortedPosts, setSortedPosts] = useState([]);
  const [sortedLinks, setSortedLinks] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Sort posts by date in descending order (most recent first)
    const sorted = [...postData].sort((a, b) => new Date(b.post_date) - new Date(a.post_date));
    setSortedPosts(sorted);
  }, []);

  useEffect(() => {
    // Sort links by date in descending order (most recent first)
    const sorted = [...linkData].sort((a, b) => new Date(b.link_date) - new Date(a.link_date));
    setSortedLinks(sorted);
  }, []);

  const handleSearch = (results, term) => {
    setSearchResults(results);
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar posts={sortedPosts} onSearch={handleSearch} />
        <main className="flex-grow">
          <AppContent 
            sortedPosts={sortedPosts} 
            sortedLinks={sortedLinks}
            searchResults={searchResults}
            searchTerm={searchTerm}
            handleSearch={handleSearch}
          />
        </main>
        <Footer_comp />
      </div>
    </Router>
  );
}

function AppContent({ sortedPosts, sortedLinks, searchResults, searchTerm, handleSearch }) {
  useReloadToHome(); // Use the custom hook here

  return (
    <Routes>
      {/* Redirect to latest post if on the root path */}
      <Route path="/" element={<NavigateToLatestPost sortedPosts={sortedPosts} />} />
      
      {/* Specific post by ID */}
      <Route path="/post/:post_id" element={<Post posts={sortedPosts} />} />
      
      {/* All posts pagination */}
      <Route 
        path="/all-posts" 
        element={
          <Pagination 
            posts={searchResults || sortedPosts} 
            searchTerm={searchTerm}
          />
        } 
      />

      {/* Daily Picks Pagination - no search functionality */}
      <Route 
        path="/daily-picks" 
        element={
          <PaginatedLinks 
            links={sortedLinks}  // Removed searchResults and searchTerm
          />
        } 
      />
      
      {/* About page */}
      <Route path="/about" element={<About />} />
      
      {/* Redirect any unmatched routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// Component to handle redirection to the latest post
const NavigateToLatestPost = ({ sortedPosts }) => {
  const location = useLocation();

  if (sortedPosts.length > 0 && location.pathname === '/') {
    const latestPostId = sortedPosts[0].post_id;
    return <Navigate to={`/post/${latestPostId}`} replace />;
  }

  return null;
};

export default App;
