import { config } from '@fortawesome/fontawesome-svg-core'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
        faFacebookF, faInstagram, faWhatsapp,
        faWhatsappSquare, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faLocationDot, faEnvelope,
         faClock, faBars, faPlus, faMinus,
         faXmark} from '@fortawesome/free-solid-svg-icons'
  
  
  
// Fontsawesome Icons imports  
export const locationIcon = <FontAwesomeIcon icon={faLocationDot} />;
export const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
export const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />;
export const envelopeIcon = <FontAwesomeIcon icon={faEnvelope} />;
export const clockIcon = <FontAwesomeIcon icon={faClock} />;
export const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
export const instagramIcon = <FontAwesomeIcon icon={faInstagram}/>
export const facebookIconF = <FontAwesomeIcon icon={faFacebookF}/>
export const whatsappIconSquare = <FontAwesomeIcon icon={faWhatsappSquare}/>
export const barMenu = <FontAwesomeIcon icon={faBars}/>
export const plusIcon = <FontAwesomeIcon icon={faPlus}/>
export const minusIcon = <FontAwesomeIcon icon={faMinus}/>
export const xMark = <FontAwesomeIcon icon={faXmark}/>


//Global Information
export const buttonsText = {
    form:"Enviar",
    footer:"Termos e Condições"
  };
export const titlesText = {
    formHomeTitle: "Consulte nossa equipe",
    contactInfo: "Contato",
    formContactTitle1: "World Trade Center São Paulo",
    formContactTitle2: "Telefone",
    formContactTitle3: "WhatsApp",
    formContactTitle4: "Email",
    formContactTitle5: "Atendimento",
};
export const contactValue = {
    phone: "(11) 2645-5284",
    whatsapp: '+551126455284',
    email: 'contato@zetta-tecnologia.com',
    buildingName:"World Trade Center São Paulo",
    adress:'Av. das Nações Unidas, 12.551',
    room:'17º Andar - Sala 1737',
    postalCode:"CEP: 04578-000",
    neighbour: "Brooklin",
    cityState:"São Paulo / SP"
  };
export const shift = {
    hours: "Segunda a Sexta: 09:00 às 18:00",
    emergency: "Atendimento Emergencial 24 horas"
  };


export const headerMenu = [
  {
    menu:"HOME",
    path:"/",
    subMenu:""
  },
  {
    menu:"EMPRESA",
    path:"/",
    subMenu:[
      {
        subPage:"Sobra a Zetta",
        path:"/"
      },
      {
        subPage:"Termos e Condições",
        path:"/"
      },
      {
        subPage:"Processo de Recuperação de Dados",
        path:"/"
      },
    ]  
  }, 
  {
    menu:"SERVIÇOS",
    path:"/",
    subMenu:[
      {
        subPage:"Recuperar Dados HD",
        path:"/recuperar-dados-hd"
      },
      {
        subPage:"Recuperar Dados SSD",
        path:"/recuperar-dados-ssd"
      },
      {
        subPage:"Recuperar Dados MAC",
        path:"/recuperar-dados-mac"
      },
      {
        subPage:"Recuperar Dados Cartão SD",
        path:"/recuperar-dados-cartao-sd"
      },
      {
        subPage:"Recuperar Dados RAID",
        path:"/recuperar-dados-raid"
      },
      {
        subPage:"Recuperar Dados DVR",
        path:"/recuperar-dados-dvr"
      },
      {
        subPage:"Recuperar Dados Pendrive",
        path:"/recuperar-dados-pendrive"
      },                                      
    ]
  },
  {
    menu:"BLOG",
    path:"/",    
    subMenu:[
      {
        subPage:"",
        path:"/"
      },
      {
        subPage:"",
        path:"/"
      },
      {
        subPage:"",
        path:"/"
      },
    ]
  },
  {
    menu:"COMO ENVIAR",
    path:"/",
    subMenu:""
  },
  {
    menu:"CONTATO",
    path:"/",
    subMenu:""
  },
];

export const formHomeSelectOptions = {
    option1:"HD",
    option2:"SSD",
    option3:"MAC",
    option4:"Cartão SD",
    option5:"RAID",
    option6:"DVR",
    option7:"PENDRIVE"
  };
export const formHomePlaceholder ={
    firstField:"Nome",
    secondField:"Email",
    thirdField:"Telefone",
    fourthField:"Escolha o dispositivo",
    fifthField:"Descreva como perdeu seus dados",
  };
export const organizer = " | "
export const footerText = `Nos reservamos o direito de prestar qualquer serviço mediante
                            o aceite dos Termos e Condições da empresa.`