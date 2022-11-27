
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav />
    <Routes>
    <Route path='/' element={<h1>products</h1>}></Route>
    <Route path='/add' element={<h1>Add Products</h1>}></Route>
    <Route path='/update' element={<h1>sss</h1>}></Route>
    <Route path='/logout' element={'logout'}></Route>
    <Route path='/profile' element={'profile'}></Route>
    <Route path='/signup' element={<SignUp />}></Route>
    </Routes>
     </BrowserRouter>
    <Footer/>

    </div>
  );
}

export default App;
