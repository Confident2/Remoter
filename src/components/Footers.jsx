import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../globalStyles";
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMagento} from 'react-icons/fa'


const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSubscription = styled.div`
  color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  align-items: center;
`;
const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

const FooterSubText = styled.h1`
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
    margin-bottom: 20px;
  }
`;
const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;

  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterLinksItems = styled.div`
  width: 160px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinksTitle = styled.h2`
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  margin-bottom: 0.5rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;

`

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`

const SocialLogo = styled(Link)`
  color:#fff;
  justify-self: start;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 16px;


`
const SocialIcon = styled(FaMagento)`
  margin-right: 10px;

`
const WebsitesRights = styled.small`
  color:#fff;
  margin-top: 10px;

`
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: 10px;
`

const SocialIconLink = styled.a`
  font-size:  24px ;
  color: #fff;
`
const Footers = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Join an exclusively professionals membership to receive updates on
            new technologies
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at any time.</FooterSubText>
          <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="Your Email Here"
            ></FormInput>
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to="/sign-up">How It Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Services</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Get Hired</FooterLinksTitle>
              <FooterLink to="/sign-up">How It Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Services</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Client Roll</FooterLinksTitle>
              <FooterLink to="/sign-up">How It Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Services</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Client Roll</FooterLinksTitle>
              <FooterLink to="/sign-up">How It Works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms Of Services</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon />JustWork
            </SocialLogo>
            <WebsitesRights> Copyright 2022</WebsitesRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook"> <FaFacebook /> </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram"> <FaInstagram /> </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter"> <FaTwitter /> </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn"> <FaLinkedin /> </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};
export default Footers;
