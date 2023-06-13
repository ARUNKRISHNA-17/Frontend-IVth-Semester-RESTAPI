import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  border: 2px solid rgba(0, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.8);
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  background-color: black;
  ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Title = styled.h1`
  padding-bottom: 7%;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
`;

export const Title1 = styled.h1`
  padding-right: 25%;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Form = styled.form`
  position: relative;
  border: 2px solid #0ff;
  box-shadow: 0 0 5px #0ff, 0 0 20px #0ff;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  color: white;

  &.forgot-container {
    background: linear-gradient(45deg, #0ff, #f0f, #ff0);
    background-size: 400%;
    animation: animateBackground 10s linear infinite;
  }

  @keyframes animateBackground {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: linear-gradient(45deg, #0ff, #f0f, #ff0);
    background-size: 400%;
    animation: animateBorder 10s linear infinite;
  }

  &:after {
    filter: blur(20px);
  }

  @keyframes animateBorder {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const Input = styled.input`
  background-color: #eee;
  letter-spacing: 1px;
  border-radius: 10px;
  border: 1px solid #434343;
  padding: 12px 2px;
  padding-bottom: 12px
  margin: 5px 0;
  text-align: center;
  font-size: 15px;
  width: 40%;
  border: 2px solid rgba(0, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.8);

  &:hover {
    transform: scale(1.1);
    border-color: #000000;
  }
  &::placeholder {
    position: relative;
    left: 0;
    letter-spacing: 3px;
    font-size: 12px;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #434343;
  background-color: #434343;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  border: 2px solid rgba(0, 255, 255, 0.8);
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.8);

  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Button1 = styled.button`
  border-radius: 20px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  color: #434343;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  background: rgb(255, 65, 44);
  );
  ${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: rgb(255, 65, 44);
  background: linear-gradient(45deg, #1b1e23, #0c0d10);  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;


export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${props => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
