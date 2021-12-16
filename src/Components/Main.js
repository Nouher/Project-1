import React from 'react'
import styled from 'styled-components'
import { listItems } from '../data';
import icon from '../assets/icon.svg'
import arrow from '../assets/arrow.svg'
import frame from '../assets/frame.svg'
import Vector from '../assets/Vector.svg'
import img1 from '../assets/img1.png'

const Container=styled.div`
    height:200vh;
    background-color: #242424;
    padding: 50px;
    
`
const TitelsContainer = styled.div`
  display: flex;
  align-items: flex-start;

`;
const Title = styled.h1`
flex: 1;
color: #fff;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 70px;
margin-bottom: 20px;
`;
const SubTitle = styled.a`
flex: 1;
display: flex;
justify-content: end;
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 40px;
text-decoration-line: underline;
color: #FFFFFF;
`;
const Section = styled.div`
  display: flex;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Desc = styled.p`
  color:white;
  width: 50%;
  font-size: 20px;
  margin-bottom: 30px;
  
`;
const List = styled.div`
  padding: 10px;
`;
const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ItemListInput = styled.input`
position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid #FF490C;
    border-radius: 8px;
    outline: none;
    transition-duration: 0.3s;
    background-color: transparent;
    cursor: pointer;
    margin-right: 10px;

    &:checked{
        background-color: #FF490C;
    }
    
`;
const ItemListTitle = styled.h3`
  color:white;
  margin-right: 10px;

  
`;
const ItemListPrice = styled.h4`
color: white;
&::before{
    content: "• ";
      color: #FF490C;
      font-weight: bold;
      display: inline-block; 
      width: 1em;
}
`;
const ItemListDesc = styled.p`
  color:white;
  width:40%;
  margin: 10px 0 10px 0;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 20px;
`;
const ImageContainer = styled.div`
  font: 1;

`;
const Image = styled.img`
position: absolute;
right: 100px;
top: 150px;

`;
const ImageArrow = styled.img`
position: absolute;
right: 50px;
top: 500px;

`;
const Bar = styled.div`
  display: flex;
  margin-top: 100px;
`;
const TitleBar = styled.h1`
color:white;
margin-right: 100px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 43.4395px;
line-height: 51px;
`;
const ImageBar = styled.img`
  
`;
const SecondSection = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Rg = styled.div`
  width: 536.98px;
height: 367.73px;
background: #F2F2F2;
border: 4.1413px solid #FF490C;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
`;
const RgBottom = styled.div`
width: 659px;
height: 11.43px;
background: #FF490C;
margin-bottom: 30px;
border-radius: 0px 0px 100px 100px;
`;
const VectorContainer = styled.div`
  display: flex;
  gap: 30px;
`;
const Main = () => {
    return (
        <Container>
            <TitelsContainer>
            <Title>Career boosting for<span style={{color:'#FF490C'}}> modern professionals</span></Title>
            <SubTitle>Обо мне</SubTitle>
            </TitelsContainer>
            <Section>
                <InfoContainer>
                    <Desc>Сервис, который поможет вам пройти успешно собеседование, попасть на работу своей мечты всего за пару консультаций </Desc>
                    
                        {listItems.map(item=>(
                            <List>
                                <ListTitleContainer>
                                <ItemListInput type='checkbox' />
                                <ItemListTitle>{item.title}</ItemListTitle>
                                <ItemListPrice>{item.price}</ItemListPrice>
                                </ListTitleContainer>
                                <ItemListDesc>{item.desc}</ItemListDesc>
                            </List>
                            ))}
                    
                </InfoContainer>
                <ImageContainer>
                    <Image src={icon} alt='icon'/>
                    <ImageArrow src={arrow} alt='icon'/>
                    
                </ImageContainer>
                
            </Section>
            <Bar>
                <TitleBar>Choose creative resumes</TitleBar>
                <ImageBar src={frame} alt='icon'/>
            </Bar>
            <SecondSection>
                <Rg>
                    <img src={img1} alt='image'/>
                </Rg>
                <RgBottom/>
                <VectorContainer>
                    <img src={Vector} alt='image' style={{transform:'rotate(180deg)'}}/>
                    <img src={Vector} alt='image' />
                </VectorContainer>
            </SecondSection>
        </Container>
    )
}

export default Main
