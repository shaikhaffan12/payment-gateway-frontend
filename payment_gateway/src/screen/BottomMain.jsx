import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './BottomMain.css';
import MainScreen from './MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getProduct } from '../app/redux/action';
import ImageTransition from '../components/ImagesTransition';


const BottomMain = () => {

    // Functionality for fetching the product from backend

    const dispatch = useDispatch()
    //  fetch true or false in success variable
    const success = useSelector((state) => state.productreducer.productFetch)
    //  fetch data from backend using redux in product state
    const product = useSelector((state) => state.productreducer.products_data)
    //  useEffect function for fetch data from backend to redux state evry time when render 
    // to this component
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    //  if product fetched then display the component 
    if (success) {

        return (
            <div>
                <div>
                    <MainScreen />
                </div>
                <div className='main-div'>
                    <div className="upper-div">
                    <div className='left mt-2'>
                        <div className='description'>
                        <a href="#" className = 'link2 float-left'>About Product</a>
                            <p className='mt-3 heading'>Apple Product</p>

                            <h1 className='head mt-1'>{product.name}</h1>

                            <p className= "middle-heading">It’s magic, remastered!</p>

                            <div className= "main-content">
                            <ul className='para mt-2'>
                                <li>
                                    Spatial audio with dynamic head tracking places sound all around you
                                </li>
                                <li>
                                    Adaptive EQ automatically tunes music to your ears
                                </li>
                                <li>
                                    All-new contoured design
                                </li>
                                <li>
                                    Force sensor lets you easily control your entertainment, answer or end calls, and more
                                </li>
                                <li>
                                    Sweat and water resistant
                                </li>
                                <li>
                                    Up to 6 hours of listening time with one charge
                                </li>
                                <li>
                                    Up to 30 hours of total listening time with the MagSafe Charging Case
                                </li>
                                <li>
                                    Quick access to Siri by saying “Hey Siri”
                                </li>
                                <li>
                                    Effortless setup, in-ear detection and automatic switching for a magical experience
                                </li>
                                <li>
                                    Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch or Apple TV
                                </li>

                            </ul>
                            </div>
                            <p className='footer'>SKUD55I5AI</p>
                        </div>
                    </div>
                    </div>

                    <div className='right mt-2'>
                        
                        <ImageTransition />
                        
                    </div>
                    
                </div>
            </div>
        )
    }
    // else display Nothing
    else
        return (
            <div> Nothing</div>
        )

}


export default BottomMain;