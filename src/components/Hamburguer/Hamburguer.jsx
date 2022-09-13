import { HamburguerContainer, HamburguerDots, HamburguerLine } from "./HamburguerStyles"

export default function Hamburguer({subMenuIsVisible, setSubMenuIsVisible}) {

  

  return (
    <HamburguerContainer href='#' width="3rem" height="3rem">
      <HamburguerLine>
        <HamburguerDots className='salmon' />
        <HamburguerDots className='black' />
        <HamburguerDots className='salmon' />
      </HamburguerLine>
      <HamburguerLine>
        <HamburguerDots className='black' />
        <HamburguerDots className='salmon' />
        <HamburguerDots className='black' />
      </HamburguerLine>
      <HamburguerLine>
        <HamburguerDots className='salmon' />
        <HamburguerDots className='black' />
        <HamburguerDots className='salmon' />
      </HamburguerLine>
    </HamburguerContainer>
  )
};