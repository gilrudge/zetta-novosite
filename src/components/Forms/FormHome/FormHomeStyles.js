import styled from "styled-components";

export const FormHomeContainer = styled.div
`
  background-color:#F2F6F8;
  width: 100%;
  padding: 10% 10%;
  border: 2px solid red;
`

export const Form = styled.div
`
  display: flex;
  background-color:#FFBDAB;  
`

export const InputData = styled.form
`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 20px 60px;
`

export const TitleForm = styled.h3
`
  margin-bottom: 10%;
  font-size: 5vh;
`

export const InputItem = styled.input
`
  margin-bottom: 5%;
  height: 7vh;
  border: none;
  border-radius: 5px;
    ::placeholder{
      padding: 10px;
      color: rgba(100,100,100,0.3);
    }
`
export const Select = styled.select
`
  border: none;
  border-radius: 5px;
  margin-bottom: 5%;
  height: 7vh;
  padding:10px;
  color: rgba(100,100,100,0.3);    
`
export const Option = styled.option
`
  border:none;  
`

export const TextArea = styled.textarea
`
  margin-bottom: 5%;
  height: 25vh;
  border:none;
  border-radius: 5px;
  padding:10px;
  ::placeholder{
    
    color: rgba(100,100,100,0.3);
  }    
`
export const FormButton = styled.button
`
  background-color:#EC7A5C;
  color:#FFEFEB;  
  width: 20%;
  height: 6vh;
  border:none;
  border-radius: 5px;
  align-itens: center;
  opacity: 1;
  transition: 0.3s;
  font-weight: bold;
    :hover{
      
      opacity: 0.5;
    }  
`
export const ContactTitleForm = styled.div
`
  font-size: 5vh;
`

export const ContactInfo = styled.div
`
  display:flex;
  flex-direction:column;
  justify-content: space-between;  
  background-color:#EC7A5C;
  width: 40%;
  color:#FFEFEB;
  padding: 20px 60px;
`

export const ContactContainer = styled.div
`
  display: flex;
    .item-icon svg{
      font-size: 5vh;
    }  
`
export const ContactTitle = styled.div
`
  font-weight: bold;
`
export const ContactList = styled.div
`
  margin-left: 5%;
`
