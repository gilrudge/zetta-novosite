import {
          FormHomeContainer, Form, InputData,
          InputItem, TextArea, FormButton,
          TitleForm, Select, Option,
          ContactInfo, ContactTitleForm,
          ContactContainer, ContactTitle,
          ContactList } from './FormHomeStyles'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {titlesText, contactValue, buttonsText,
        formHomeSelectOptions, formHomePlaceholder,
        locationIcon, phoneIcon, whatsappIcon,
        envelopeIcon, clockIcon, shift, organizer } from '../../../globalData'



export default function FormHome() {    
  

  return (
    <FormHomeContainer>
      <Form>
        <InputData action="/api/form" method='post'>
          <TitleForm>{titlesText.formHomeTitle}</TitleForm>
          <InputItem type="text" placeholder={formHomePlaceholder.firstField} required />
          <InputItem type="email" placeholder={formHomePlaceholder.secondField} required />
          <InputItem type="tel" placeholder={formHomePlaceholder.thirdField} required />
          
          <Select name="devices" id="devices">
            <Option className="select-devices select-option" selected disabled>{formHomePlaceholder.fourthField}</Option>
            <Option className="select-option" value="SSD">{formHomeSelectOptions.option1}</Option>
            <Option className="select-option" value="MAC">{formHomeSelectOptions.option2}</Option>
            <Option className="select-option" value="CARTAO SD">{formHomeSelectOptions.option3}</Option>
            <Option className="select-option" value="RAID">{formHomeSelectOptions.option4}</Option>
            <Option className="select-option" value="DVR">{formHomeSelectOptions.option5}</Option>
            <Option className="select-option" value="Pendrive">{formHomeSelectOptions.option6}</Option>
            <Option className="select-option" value="Pendrive">{formHomeSelectOptions.option7}</Option>

          </Select>
          <TextArea
            name=""
            id="text-area"
            cols="30"
            rows="10"
            placeholder={formHomePlaceholder.fifthField}
            className='input-field'
          >
          </TextArea>
          <FormButton>{buttonsText.form}</FormButton>
        </InputData>
        <ContactInfo>
          <ContactTitleForm>{titlesText.contactInfo}</ContactTitleForm>
          <ContactContainer>
            <div className='item-icon'>{locationIcon}</div>
            <ContactList>
              <ContactTitle>{titlesText.formContactTitle1}</ContactTitle>
              <div className="adress-item">{contactValue.adress}</div>
              <div className="adress-item">{contactValue.room}</div>
              <div className="adress-item">{
                contactValue.neighbour + 
                organizer + 
                contactValue.cityState}</div>
              <div className="adress-item">{contactValue.postalCode}</div>
            </ContactList>
          </ContactContainer>
          <ContactContainer>
            <div className='item-icon'>{phoneIcon}</div>
            <ContactList>
              <ContactTitle>{titlesText.formContactTitle2}</ContactTitle>
              <div className='contact-number'>{contactValue.phone}</div>
            </ContactList>
          </ContactContainer>
          <ContactContainer>
            <div className='item-icon'>{whatsappIcon}</div>
            <ContactList>
              <ContactTitle>{titlesText.formContactTitle3}</ContactTitle>
              <div className='contact-number'>{contactValue.whatsapp}</div>
            </ContactList>
          </ContactContainer>
          <ContactContainer>
            <div className='item-icon'>{envelopeIcon}</div>
            <ContactList>
              <ContactTitle>{titlesText.formContactTitle4}</ContactTitle>
              <div className='contact-number'>{contactValue.email}</div>
            </ContactList>
          </ContactContainer>
          <ContactContainer>
            <div className='item-icon'>{clockIcon}</div>
            <ContactList>
              <ContactTitle>{titlesText.formContactTitle5}</ContactTitle>
              <div className='contact-number'>{shift.hours}</div>
              <div className='contact-number'>{shift.emergency}</div>
            </ContactList>
          </ContactContainer>
        </ContactInfo>
      </Form>
    </FormHomeContainer>
  )
}