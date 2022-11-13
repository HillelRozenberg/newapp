import React from 'react';
import Home from './Home';
import Login from './login';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Info from './info';
import Todos from './todos'
import Posts from './posts';
import Albums from './albums';
import Comments from './comments';
import Photos from './photos';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
            <Route index element={<Login />} />
            <Route path="Home" element={<Home />} >
            <Route path="info" element={<Info />} />
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />} >
            <Route path="Comments" element={<Comments />} />
            </Route>
            <Route path="albums" element={<Albums />} >
            <Route path="photos" element={<Photos />} >
            </Route>
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;