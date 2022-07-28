import BottomMain from './screen/BottomMain';
import './App.css';
import { useState, useEffect } from 'react';
import MessageModal from './components/MessageModal';

function App() {
  const[message, setMessage] = useState(false)

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')){
      setMessage(true)
    }
    if (query.get('cancel')){
      setMessage(false)
    }
  }, [])

  return (
    <div className="App">
      {/* {message ? <MessageModal message = {message} setMessage = {setMessage}/> : <BottomMain />} */}
      <BottomMain />
      <MessageModal message = {message} setMessage = {setMessage}/>
    </div>
  );
}

export default App;
