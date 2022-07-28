import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/Navbar';
import './MainScreen.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const MainScreen = () => {
    const [count, setCount] = useState(1)
    const price = 299
    const url = process.env.REACT_APP_API_URL
    console.log(url)
    const product = useSelector((state) => state.productreducer.products_data)
    return(
        <div>
            <div >
            <Navbar />
            </div>
            <div className='mt-2'>
                <a href="#" className = 'link1 float-left'>About Product</a>
                <div className = 'side-main'>
                <p>Price: <span>$299.00</span></p>
                <input type="number" value= {count} min="-3" max="3" onChange={(e) => {setCount(e.target.value)}}/>
                <form action={`${url}api/create-checkout-session/${product.id}/${count}`} method='POST'>
                <button type='submit'>Buy Now</button>
                {/* <input type="submit" value = "Buy Now" className='btn btn-primary' /> */}
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default MainScreen;