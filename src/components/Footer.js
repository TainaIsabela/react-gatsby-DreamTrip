import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>DreamTrip</h1>
                    <p>Nos estamos criando as melhores experiências de nossos clientes</p>
                </FooterDesc>
                <FooterLinksItems>
                    <FooterLinkTitle>Entre em contato</FooterLinkTitle>
                    <FooterLink to="/about">Contato</FooterLink>
                    <FooterLink to="/">Suporte</FooterLink>
                    <FooterLink to="/">Destinos</FooterLink>
                    <FooterLink to="/">Patrocínio</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to="/]">Envie seu video</FooterLink>
                    <FooterLink to="/">Agência</FooterLink>
                    <FooterLink to="/">Influenciadores</FooterLink>
                    <FooterLink to="/">Embaxadores</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
                <FooterLinksWrapper>
                <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">YouTube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`
const FooterDesc = styled.div`
padding: 0 2rem;

h1{
    margin-bottom: 3rem;
    color: #f26a2e;
}

@media screen and (max-width: 400px){
    padding: 1rem;
}
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-column:repeat(2, 1fr);

@media screen and (max-width: 820px){
    grid-template-column: 1fr;
}
`
const FooterLinksItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px){
    padding: 1rem;
}
`
const FooterLinkTitle = styled.h2`
font-size: 14px; 
margin-bottom: 16px;
`
const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #3d3d4e;

&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`
