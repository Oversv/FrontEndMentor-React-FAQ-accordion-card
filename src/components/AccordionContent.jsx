import React from 'react'
import styled from 'styled-components'
import arrow from'../assets/images/icon-arrow-down.svg'

const Question = styled.h4`    
    font-size: 13px;
    font-weight: ${({open}) => open ? '700' : '400' };        
    color: ${(props) => props.open ? props.theme.primaryText1 : props.theme.neutralText2 };   
    padding-bottom: ${({open}) => open ? '9px' : '16px' };
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;       

    &::after{
        content: url(${arrow});
        display: inline-block;  
        transform: ${({open}) => open ? 'rotate(180deg)' : 'rotate(0deg)' };        
        transition: transform .3s;
    }

    @media screen and (min-width: 1024px){
        font-size: 14.2px;
        margin-top: 18px;

        &:hover{
            cursor: pointer;     
            color: ${({theme}) => theme.primaryText2}; 
        }
    }
`

const Answer = styled.p`
    max-height: ${({open})=> open ? '100vh' : 0};
    overflow: hidden;
    margin-top: 0;
    padding-bottom: ${({open}) => open ? '15px': 0};
    padding-right: 20px;
    line-height: 20px;
    color: ${({theme}) => theme.neutralText2};
    border-bottom: 1px solid ${({theme}) => theme.dividers};           
`

const AccordionContent = ({text, content, question, active, handleClick, handleonMouseOver, handleOnMouseLeave}) =>{  
   
    if(active === question){       
        return(
            <>   
                <Question 
                    open 
                    onClick={()=>handleClick(question)}
                    onMouseOver = {handleonMouseOver}
                    onMouseLeave = {handleOnMouseLeave}
                    >{text}
                </Question> 
                <Answer open>{content}</Answer> 
            </>
        )

     }else{
         return(
             <>   
                 <Question 
                    onClick={()=>handleClick(question)}
                    onMouseOver = {handleonMouseOver}
                    onMouseLeave = {handleOnMouseLeave}
                    >{text}
                </Question> 
                 <Answer>{content}</Answer> 
             </>
         )
     }    
}

export default AccordionContent