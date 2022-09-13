import styled from 'styled-components';
import Link from 'next/link';

export const HamburguerContainer = styled.button`
  display: flex;
  flex-direction: column;  
  height: ${props=>props.height};
  width:${props=>props.width};
  border:none;
  background-color: #fff;
  
  justify-content: space-between;
  display:none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin-top: 50px;
    top:0;
    right: 0;
    transform: translate(-90%, 80%);
    cursor: pointer;
  }  
`

export const HamburguerLine = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
`


export const HamburguerDots = styled.div` 
  width: 5px;
  background-color: #EC7A5C;
  height: 5px;  
  border-radius: 5px;
  margin:5px;
    &.salmon{
      background-color: #333333;
    }
`
