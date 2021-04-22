import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { FaRegLightbulb } from 'react-icons/fa'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { useStaticQuery, graphql }from "gatsby"
const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query{
        allFile(filter: {ext:{regex: "/(jpg)|(png)|(jpeg)/"},
        name:{in:["testemunha1", "testemunha2"]}}){
            edges{
                node{
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`)

    return (
        <TestimonialContainer>
            <TopLine> Testemunhas </TopLine>
            <Description> O que dizem sobre a DreamTrip:</Description>
            <ContentWrapper>
                <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline
                    css={`
                        color: #a3321e;
                        font-size: 2rem;
                        margin-bottom: 1rem;
                    `}
                    />
                    <h3>Thiago Castro</h3>
                    <p>"Uma das melhores experiências que eu já tive!
                    Recomendo para todos que quiserem ter uma viagem fantastica,
                    agrádavel e com um preço justo, a facilidade com que tive para fazer 
                    as reservas superou minhas expectativas."</p>
                </Testimonial>

                <Testimonial>
                    <FaRegLightbulb
                    css={`
                    color: #11c9;
                    font-size: 2rem;
                    margin-bottom: 1rem;
                `}/>
                    <h3>Elisa Montes</h3>
                    <p>"Foi tão fácil reservar minha viagem que eu não acreditava,
                        a DreamTrip sem sombra de dúvidas tem o melhor preço combinado 
                        com a maior segurança, todas as dúvidas que tive sobre a viagem e as 
                        reservas foram resolvidas de forma simples."
                        
                        </p>
                </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) =>(
                    <Images key = {key} fluid={image.node.childImageSharp.fluid} />
                ))}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialContainer>
    )
}

export default Testimonials

const TestimonialContainer = styled.div`
width:100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%;
`
const TopLine = styled.p`
color: #077bf1;
font-size: 1rem;
padding-left: 2rem;
margin-bottom: 0.75rem;
`

const Description = styled.p`
text-align: start;
padding-left: 2rem;
margin-bottom: 4rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`

const ContentWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns:1fr;
}
`
const ColumnOne = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
padding-top: 1rem;
padding-right: 2rem;

h3{
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    
}

p{
    color : #3b3b3b;
}
`

const ColumnTwo = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
margin-top: 2rem;
grid-gap: 10px;

@media screen and(max-width: 500px) {
    grid-template-columns:1fr;
}

`

const Images = styled(Img)`
border-radius: 10px;
height:100%;

`