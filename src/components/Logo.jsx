import React from 'react'
import imageMobile from '../assets/images/illustration-woman-online-mobile.svg'
import imageDesktop from '../assets/images/illustration-woman-online-desktop.svg'
import bgPatternMobile from '../assets/images/bg-pattern-mobile.svg'
import bgPatternDesktop from '../assets/images/bg-pattern-desktop.svg'
import box from '../assets/images/illustration-box-desktop.svg'
import styled from 'styled-components'

const Picture = styled.picture`   
    width: 270px;    
    position: absolute;
    top: -110px;
    right: calc(50% - 116px);    
    padding-bottom: 20px;
    background-image: url(${bgPatternMobile});
    background-repeat: no-repeat;     
    background-position: 100% 98%;        

    @media screen and (min-width: 1024px){       
        position: static;        
        width: 50%;
        height: 100%;
        padding-top: 110px;
        margin-left: -145px;
        background-image: url(${bgPatternDesktop});   
        background-size: 966px 945px;
        background-position: 100% 68%;

        &::after{
            content: url(${box});
            position: absolute;   
            top: 39.5%; 
            left: ${({boxPosition}) => boxPosition};            
            width: 191px;
            height: 184px;
            transition: left .3s
        }
    }    
`

const Logo = ({boxPosition}) =>{
    
    return (
        <Picture boxPosition={boxPosition}> 
            <source media="(min-width:1024px)" srcSet={imageDesktop}/>  
            <img src={imageMobile} alt="woman online"/>         
        </Picture>
    )
}

export default Logo