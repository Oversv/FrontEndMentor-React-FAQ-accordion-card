import React from 'react'
import imageMobile from '../assets/images/illustration-woman-online-mobile.svg'
import imageDesktop from '../assets/images/illustration-woman-online-desktop.svg'
import bgPatternMobile from '../assets/images/bg-pattern-mobile.svg'
import bgPatternDesktop from '../assets/images/bg-pattern-desktop.svg'
import box from '../assets/images/illustration-box-desktop.svg'
import styled from 'styled-components'

const Picture = styled.picture`   
    width: 270px;
    margin-left: -30px;
    position: absolute;
    top: -110px;
    padding-bottom: 20px;
    background-image: url(${bgPatternMobile});
    background-repeat: no-repeat;     
    background-position: 100% 98%;        

    @media screen and (min-width: 768px){       
        position: static;        
        width: 50%;
        height: 100%;
        padding-top: 68px;
        margin-left: -80px;
        background-image: url(${bgPatternDesktop});   
        background-size: 966px 945px;
        background-position: 100% 68%;

        &::after{
            content: url(${box});
            position: absolute;   
            top: 39.5%; 
            left: -97px;
            //TODO Move box with hover
            width: 191px;
            height: 184px;
        }
    }    
`
const Logo = () =>{
    return (
        <Picture> 
            <source media="(min-width:768px)" srcSet={imageDesktop}/>  
            <img src={imageMobile} alt="woman online"/>         
        </Picture>
    )
}

export default Logo