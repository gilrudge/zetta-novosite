import {  FooterStyles, Button, FooterTerms,
          TextoTermos, SocialIcon, FooterContact,
          Title,  AdressContainer, AdressList,
          LocationIcon, PhoneBlock, EmailBlock,
          WhatsappBlock, AttendanceBlock, AttendanceList } from './FooterStyles'
import {  locationIcon, phoneIcon, whatsappIconSquare,
          envelopeIcon, clockIcon, instagramIcon,
          footerText, facebookIconF, contactValue,
          shift, organizer, buttonsText,
          titlesText} from '../../globalData.js'
            
import    Image from 'next/image'
import    Link from 'next/link'


export default function Footer(){   

  const logoLoader = ({src, width, quality}) =>{
    return `images/logo/${src}?w=${width}&q=${quality || 75}`
  }
  const logoZetta = (props) =>{
    return(
      <Image
        loader={logoLoader}
        src={props}
        alt='zetta-logo'
        width={150}
        height={50}
        
      />
    )
  }

  
  return(
    <FooterStyles>
      <FooterTerms className='footer-termos'>
        <span className='logo'>{logoZetta('LogoCompletoBranco.png')}</span>
        <TextoTermos>{footerText}</TextoTermos>
        <Link href="/"><Button>{buttonsText.footer}</Button></Link>
        <SocialIcon className='social-media-icons'>
          <div id='facebookIcon'>{facebookIconF}</div>
          <div id='instagramIcon'>{instagramIcon}</div>
        </SocialIcon>
      </FooterTerms>
      <FooterContact>
        <Title>{titlesText.contactInfo}</Title>
        <AdressContainer>
          <LocationIcon id='locationIcon'>{locationIcon}</LocationIcon>
          <AdressList>
            <div className='adress-item' id='WTC'>{contactValue.buildingName}</div>
            <div className='adress-item'>{contactValue.adress + organizer + contactValue.room}</div>
            <div className='adress-item'>{contactValue.postalCode + organizer + contactValue.neighbour + " - " + contactValue.cityState}</div>            
          </AdressList>
        </AdressContainer>
        <PhoneBlock>
          <div className='phone-icon'>{phoneIcon}</div>
          <div className='phone-number'>{contactValue.phone}</div>
        </PhoneBlock>
        <EmailBlock className='email'>
          <div className='envelope-icon'>{envelopeIcon}</div>
          <div className='email-adress'>{contactValue.email}</div>
        </EmailBlock>
        <WhatsappBlock>
          <div className='whatsapp-icon'>{whatsappIconSquare}</div>
          <div>{contactValue.whatsapp}</div>
        </WhatsappBlock>
        <AttendanceBlock className='atendimento'>
          <div className='clock-icon'>{clockIcon}</div>
          <AttendanceList>
            <div>{shift.hours}</div>
            <div>{shift.emergency}</div>
          </AttendanceList>
        </AttendanceBlock>                
      </FooterContact>
    </FooterStyles>
  )
}