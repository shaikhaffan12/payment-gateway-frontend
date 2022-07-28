import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './BottomMain.css';
import MainScreen from './MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getProduct } from '../app/redux/action';
import ImageTransition from '../components/ImagesTransition';

const BottomMain = () => {
    const dispatch = useDispatch()
    const success = useSelector((state) => state.productreducer.productFetch)
    const product = useSelector((state) => state.productreducer.products_data)
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    if (success) {

        return (
            <div>
                <div>
                    <MainScreen />
                </div>
                <div className='main-div'>
                    
                    <div className='left mt-2'>
                        <div className='description'>
                        <a href="#" className = 'link2 float-left'>About Product</a>
                            <p className='mt-3 heading'>Apple Product</p>

                            <h1 className='head mt-1'>{product.name}</h1>

                            <ul className='para mt-2'>
                                <li>
                                    With Mic:Yes
                                </li>
                                <li>
                                    Connector type: No
                                </li>
                                <li>
                                    Bluetooth version: v5.0
                                </li>
                                <li>
                                    Active Noise Cancellation for immersive sound
                                </li>
                                <li>
                                    More than 24 hours of total listening time with the MagSafe Charging Case
                                </li>
                                <li>
                                    Transparency mode for hearing and interacting with the world around you
                                </li>
                                <li>
                                    Spatial audio with dynamic head tracking for theater-like sound that surrounds you
                                </li>
                                <li>
                                    Adaptive EQ automatically tunes music to the shape of your ear
                                </li>
                                <li>
                                    Three sizes of soft, tapered silicone tips for a customizable fit | Sweat and water resistant
                                </li>

                            </ul>
                            <p className='footer'>SKUD55I5AI</p>
                        </div>
                    </div>

                    <div className='right mt-2'>
                        
                        <div className=' imageslider'>
                        
                            <div style={{ "textAlign": "center", "marginTop": "21rem" }}>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            
                        </div>
                        {/* <ImageTransition /> */}
                    </div>
                    
                </div>
            </div>
        )
    }
    else
        return (
            <div> nothing</div>
        )

}


export default BottomMain;