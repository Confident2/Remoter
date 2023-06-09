import React from "react";
import styled from "styled-components";
import { Container, Button } from "../globalStyles";
import { Link } from "react-router-dom";

const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background-color: ${({ lightBg }) => (lightBg ? "#fff" : "#010522")};
`;
const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;
const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;
const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

const Subtitle = styled.p`
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#4b59f7")};
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 440px;
`;

const ImgWrapper = styled.div`
 max-width: 555px;
 display: flex;
 justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')} ;
`

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`
const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  topLine,
  headLine,
  primary,
  img,
  alt,
  start
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>

                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt}>
                </Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
