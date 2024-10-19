// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import modelHeader from '../../assets/phone1.png'
import {SocialMedia} from "../SocialMedia/SocialMedia.jsx";


export const Header = () => {
    return (
        <>

            <div className="Header_Container">
                <div className="SocialMediaHeader">
                    <SocialMedia/>
                </div>

                <div className="title_header">
                    <h2 className="title_header-title">The <br></br>newest <br></br>tech</h2>
                </div>

                <div className="Header_Image">
                    <img className="Header_Image-Image" src={modelHeader}/>
                </div>
            </div>
        </>
    )
}
