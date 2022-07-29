import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from '../components/Navbar';
import './MainScreen.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MainScreen = () => {

    // components for About Product, Counter and buy now button
    const price = 299
    const [count, setCount] = useState(1)
    // Extract base url from environment file
    const url = process.env.REACT_APP_API_URL 
    // extract product data from redux state 
    const product = useSelector((state) => state.productreducer.products_data)
    // function for handling counter 
    const handleIncrement = () => {
            let i = count+1
            if (i <=3 ){
                setCount(i)
            }
    }
    const handleDecrement = () => {
        let i = count-1
        if (i >=1){
            setCount(i)
        }
    }
    return(
        <div>
            <div >
            <Navbar />
            </div>
            <div className='mt-2'>
                <a href="#" className = 'link1 float-left'>About Product</a>
                <div className = 'side-main'>
                <p className="price">Price: <span>${count * price}</span></p>

                {/* product counter */}
                <div className = "counter-main" style={{backgroundColor:"#f5f7ff", height:"2.3rem"}}>
                <p className="display-count">{count}</p>
                <div className='counter'> 
                    <span className="count" onClick={() => handleIncrement()}><ExpandLessIcon  style={{height: '1rem'}}/></span>
                    <span className = "count" onClick={() => handleDecrement()}><ExpandMoreIcon style={{height: '1rem'}} /></span>
                </div>
                
                </div>
                {/* calling stripe checkout session  using POST method pass product id and number of count */}
                <form action={`${url}api/create-checkout-session/${product.id}/${count}`} method='POST'>
                <button type='submit'>Buy Now</button>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default MainScreen;