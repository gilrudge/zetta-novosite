import styled from "styled-components";


export  const FooterStyles = styled.div
`
  display: flex;
  background-color: #333;
  padding: 50px 80px;
  justify-content: space-between;
`
export const FooterTerms = styled.div
`
  display: flex;
  flex-direction: column;  
  justify-content: space-between;
  width: 33%;
`
export const TextoTermos = styled.div
` 
  text-align: justify;
  color:#FFEFEB;
  width:100%;
`

export const Button = styled.button
`
  background-color:#EC7A5C;
  padding: 10px;
  color:#FFEFEB;
  border: none;
  border-radius: 3px;
  width: 50%;
  opacity: 1;
  transition: 0.3s;
    :hover{      
      opacity: 0.5;
    }  
`

export const SocialIcon = styled.div
`
  display: flex;
  color:#EC7A5C;
  
  width: 10.5rem;
  gap: 10px;
  height: 50px;

  #facebookIcon svg{
    font-size: 25px;      
  }

  #instagramIcon svg{
    font-size: 25px;
  }

`
export const FooterContact = styled.div
`
  display: flex;
  flex-direction: column;
  width: 33%;
  gap: 15px;
  margin-bottom: 5px;
`

export const Title = styled.span
`
  color: #FFEFEB;
  font-size: 25px;
  font-weight: bold;
    
`
export const AdressContainer = styled.div
`
  display:flex;
  gap: 5px;

  #locationIcon svg{
    font-size: 20px;
  }
`
export const LocationIcon = styled.span
`
  color:#EC7A5C;
`

export const AdressList = styled.div
`
  margin-left: 10px;

  .adress-item{
  font-size: 15px;
  color:#FFEFEB;
  }

  #WTC{
    font-weight: bold;
  }
`
export const PhoneBlock = styled.div
`
  display: flex;
  gap: 10px;

  .phone-icon svg{
  color:#EC7A5C;
 }

  .phone-number{
  color:#FFEFEB;
 }
`

export const EmailBlock = styled.div
`
  display: flex;
  gap: 10px;
  font-size: 15px;
  color:#FFEFEB;

  .envelope-icon svg{
    color:#EC7A5C;
    font-size: 18px;
  }

`
export const WhatsappBlock = styled.div
`
  display: flex;
  gap: 10px;
  font-size: 15px;
  color:#FFEFEB;

  .whatsapp-icon svg{
    color:#EC7A5C;
    font-size: 20px;
     
  }
`

export const AttendanceBlock = styled.div
`
  display: flex;
  gap: 10px;

  .clock-icon svg{
    color:#EC7A5C;
    font-size: 18px;
  }
`
export const AttendanceList = styled.div
`
  color:#FFEFEB;
  
`