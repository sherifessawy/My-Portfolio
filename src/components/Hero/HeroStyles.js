import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const InvisibleBtn = styled.button`
  position: fixed;
  display: none;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 10px;
  z-index: 99;
  right: 30px;
  bottom: 50px;
  background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
  transition: fade-in;
  opacity: 0.85;
  animation-name: fadeInOpacity;
	animation-timing-function: ease-in;
	animation-duration: 0.5s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  ${({ offset }) => offset && (`display: block;`)}

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.85;
    }
  }

  @media(min-width: 1200px){
    padding: 0.5em 1em;
    right: 50px;
  }

  @media(max-width: 480px){
    right: 10px;
  }
`



