import BottomMain from './screen/BottomMain';
import './App.css';
import { useState, useEffect } from 'react';
import MessageModal from './components/MessageModal';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import { Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function App() {
  // functionality for modal after stripe session
  const[message, setMessage] = useState(false)
  // const history = useNavigate()

  useEffect(() => {
    const query = new URLSearchParams(window.location.search) 
    if (query.get('success')){
      setMessage(true)
    }
    if (query.get('cancel')){
      setMessage(false)
    }
    // useNavigate.replace({
    //   search : query.toString()
    // })
  }, [])

  return (
    <>
    <div className="App container">
      {/* <Routes> */}
        {/* <Route path="/" component={<BottomMain />} />
        <Route path="/messages" component={<MessageModal message = {message} setMessage = {setMessage}/>} /> */}
      <BottomMain />
      <MessageModal message = {message} setMessage = {setMessage}/>
      {/* </Routes> */}
    </div>
    </>
  );
}

export default App;
