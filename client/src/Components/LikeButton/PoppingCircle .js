import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0); 
    }
    to {
        transform: scale(1); 
    }
  `;
const fadeOut = keyframes`
   from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
  `;
const PoppingCircle = ({ size, color }) => {
  return <Wrapper style={{ width: size, height: size, background: color }} />;
};

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  display: block;
  animation: ${scale} 300ms forwards ease-in-out, ${fadeOut} 500ms forwards ease;
`;

export default PoppingCircle;
