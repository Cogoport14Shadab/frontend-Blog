import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './CreatePost';
import Home from './Home';
import UpdatePost from './UpdatePost';
import Blog from './Blog';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    {/* <App /> */}
    <Routes>      
              <Route path="/" element={<Home/>}></Route>
              <Route path="/createPost" element={ <CreatePost />}></Route>
              <Route path="/updateBlog/:id" element={<UpdatePost />}></Route>
              <Route path="/blog/:id" element={<Blog />}></Route> 
              </Routes>
     </BrowserRouter>
  </React.StrictMode>
);

