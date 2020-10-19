import React, {useState} from 'react'
import AccordionContent from './AccordionContent';
import styled from 'styled-components'

const Section = styled.section`    
    width: 100%;
    padding-bottom: 10px;
    
    @media screen and (min-width: 768px){
        max-width: 335px;
        margin-right: 110px;                 
    }
`
const H1 = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin-top:115px;
    margin-bottom: 30px;

    @media screen and (min-width: 768px){
        text-align: start;
        margin-top:70px;
        margin-bottom: 36px;
    }
`

const Accordion = () =>{

    const [active, setActive] = useState("");

    const handleClick = (question)=>{

        if(active === question){ 
            setActive("")

        }else{
            setActive(question)           
        }
    }
    
    return(
        <Section>
            <H1>FAQ</H1>
            <AccordionContent
                text="How many team members can I invite?"
                content="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
                question="question1"
                active = {active}    
                handleClick={handleClick}               
            />

            <AccordionContent
                text="What is the maximum file upload size?"
                content="No more than 2GB. All files in your account must fit your allotted storage space."
                question="question2"
                active = {active}            
                handleClick={handleClick}
            />

            <AccordionContent
                text="How do I reset my password?"
                content="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
                question="question3"
                active = {active}            
                handleClick={handleClick}
            />

            <AccordionContent
                text="Can I cancel my subscription?"
                content="Yes! Send us a message and we’ll process your request no questions asked."
                question="question4"
                active = {active}            
                handleClick={handleClick}
            />

            <AccordionContent
                text="Do you provide additional support?"
                content="Chat and email support is available 24/7. Phone lines are open during normal business hours."
                question="question5"
                active = {active}            
                handleClick={handleClick}
            />

        </Section>
    )
}

export default Accordion