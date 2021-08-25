import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Comunícate conmigo</LinkTitle>
					<LinkItem href="tel:970794009">+51 970794009</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Correo</LinkTitle>
					<LinkItem href="mailto:kjor29@gmail.com">kjor29@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>
						'Haz una versión 1% mejor de ti mismo cada día, <br /> en un año serás 37 veces mejor de lo que
						eres'
					</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/kioshiokamoto">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/kioshi-jose-okamoto-rojas-3a138718b/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/kioshiokamoto/">
						<AiFillInstagram size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
