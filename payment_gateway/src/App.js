import './App.css';
import { useState, useEffect } from 'react';
import MessageModal from './components/MessageModal';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';
import AboutProduct from './screen/AboutProduct';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from './screen/HomeScreen';

function App() {
  // functionality for modal after stripe session
  const[message, setMessage] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage(true)
      query.delete("success");
      navigate({ search: query.toString() }, { replace: true });
    }
    if (query.get("cancel")) {
      setMessage(false)
      query.delete("cancel");
      navigate({ search: query.toString() }, { replace: true });
    }
  }, [navigate]);

  return (
    <>
    <div className="App container">
      <Routes>
        <Route path="" element={<HomeScreen />}/> 
        <Route path="/messages" element={<MessageModal message = {message} setMessage = {setMessage}/>} />
        <Route path="/about" element={<AboutProduct />}/>
      {/* <BottomMain />
      <MessageModal message = {message} setMessage = {setMessage}/> */}
      </Routes>
      
    </div>
    </>
  );
}

export default App;
