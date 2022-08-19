import {BrowserRouter, Route, Routes, } from 'react-router-dom';
import NotFound from './components/NotFound';
import Tasks from './components/Tasks';
import Home from './page';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Home/>}>
            <Route index element={<Tasks/>} />
            <Route path=':userId' element={<Tasks/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
