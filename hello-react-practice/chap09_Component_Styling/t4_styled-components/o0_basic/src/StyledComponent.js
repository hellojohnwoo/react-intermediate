import React from 'react';
import styled, { css } from 'styled-components';
 
const Box = styled.div`
  /* I can directly forward the value you put in props. */
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;
 
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
 
  /* Choose yourself like Sass using & characters */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
 
  /* The following code will give you a specific style when 'inverted' value is 'true'. */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;
 
const StyledComponent = () => (
  <Box color="black">
    <Button>hi</Button>
    <Button inverted={true}>border only</Button>
  </Box>
);
 
export default StyledComponent;
