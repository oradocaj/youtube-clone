import React from 'react';
import "./App.css";
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>          
          <Route 
          path='youtube-clone/search/*' 
          element={
          <h1>Search page</h1>
          } />  
          
          <Route 
          path='youtube-clone/' 
          element={
          <>            
            <div className='app__page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </>}
          />                  
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
