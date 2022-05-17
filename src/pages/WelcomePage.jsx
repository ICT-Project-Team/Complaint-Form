import React from 'react';
import styled from 'styled-components'
import backgroundImage from '../assets/background.jpg'
import {Link} from "react-router-dom";

function WelcomePage(props) {
    return (
        <WelcomeLayout>
            <LinearBackground>
                <WelcomeStyled>
                    <h1>Student Grievance Form</h1>
                    <h2>Royal University Of Phnom Penh</h2>
                    <p>📃 Purpose of Grievances - Grievance form is a formal complaint that is used to register a complaint against a particular individual or organisation. Grievance procedure can be initiated by any employee, including a manager, or a set of employees. Grievance is a formal or informal process that is, The purpose of a grievance policy provides staff with a readily accessible procedure for addressing problems or concerns they may have regarding their work, management, or another member of the team.</p>

                    <Link to={"/form"}>
                        <button>Let's Start</button>
                    </Link>
                    <br/>
                    <span>All Right Received 2022 Royal University Of Phnom Penh, <a href={"http://rupp.edu.kh/"}>More Information</a></span>
                </WelcomeStyled>
            </LinearBackground>
        </WelcomeLayout>
    );
}

const LinearBackground = styled.div`
  display: flex;
  height:100%;
  padding: 0 clamp(1em,1.5vw,1.5em);
  background-color: rgba(131,23,23,0.5);
`

const WelcomeLayout = styled.div`
  position: relative;
  background: #831717 center/cover url(${backgroundImage}) no-repeat;
  //background-color:#61dafb;
  height:100%
`

const WelcomeStyled = styled.section`
  //position:absolute;
  //transform: translate(-50%,-50%);
  //top: 50%;
  //left: 50%;
  border-radius: 4px;
  background:rgba(255, 255, 255, .85);
  padding: 2.5% 5% 1.5% 5%;
  max-width: 1000px;
  margin: auto;
  
  @media (max-width: 768px){
    padding:10% 5% 5% 5%;
  }
  
  span{
    color:#18181a;
    font-size: clamp(.75em,1vw,1em);

  }
  
  h1{
    //font-size: 1.em;
    margin-bottom: .1em;
    font-weight: 600;
    //@media (max-width: 768px){
    //  font-size: 1em;
    //}
  }
  h2{
    font-size: 1.5em;
    margin-bottom: 1em;
    font-weight: 500;
    color:#831717;
    @media (max-width: 768px){
      font-size: 1.25em;
    }
  }
  p{
    font-size: clamp(.85em,1vw,1em);
    margin-bottom: clamp(1.5em,2vw,2.5em);
  }
  button{
    margin-bottom: 2.5em;
    border-radius: 4px;
    outline: none;
    border:none;
    padding: .5em 1.25em;
    background: #831717;
    color:white;
    transition: background 150ms ease-in-out;

    &:hover{
      background: rgba(131, 23, 23, 0.5)
    }
  }
`

export default WelcomePage;