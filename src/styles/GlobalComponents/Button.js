import React, {useState} from 'react'
import reactDom from 'react-dom'
import { ButtonBack, ButtonFront } from './index'
import styled from 'styled-components'
import { AiFillMail, AiFillPhone, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Button = (props) => {
  const [showMore, setShowMore] = useState(false)

  function handleClick(){
    setShowMore(true)
    
  }

  return showMore ? 
    (
      <>
        {reactDom.createPortal(<Button.Feature setShowMore={setShowMore}/> , document.body)}
        <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled} onClick={() => handleClick()}>{props.children}
          <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
        </ButtonBack>
      </>
    ) : (
      <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled} onClick={() => handleClick()}>{props.children}
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
      </ButtonBack>
    )
}


const Feature = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin 0 auto;
  width: fit-content;
  background: #0F1624;
  background-image: url('/images/services-bg.jpg');
  background-size: cover;
  z-index: 11;
  padding: 1em;
  border-radius: 10px;
  max-width: 95%;

  div p {
    margin-bottom: 0.5em;
  }

  .h44{
    text-decoration: none;
    color: white;
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    margin: 1em auto;
    padding: 0.5em 1em;
    border-radius: 5px;
    width: fit-content;

    &:hover{
      background: linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
      cursor: pointer;
    }
  }
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.8);
  z-index: 10;
`
Button.Feature = function ButtonFeature({setShowMore}){
  return (
    <>
      <Overlay onClick={() => setShowMore(false)}/>
      <Feature>
        <div>
          <h3>If you are looking for someone to build or edit a UI for you, contact me through:</h3>
          <br/>
          <p> <AiFillPhone /> +20 1066 8944 09</p>
          <p><AiFillMail /> shrief.issawy@gmail.com</p>
          <p><AiFillLinkedin /> linkedin.com/in/sherif-khedr-67223393/</p>
        </div>
        <br/>
        <div>
          <h3>if you want to know more about my work</h3>
          <br/>
          <Link href="#projects">
            <h4 className='h44' onClick={() => setShowMore(false)}>
              See my projects
            </h4>
          </Link>
        </div>
      </Feature>
    </>
  )
}

export default Button
