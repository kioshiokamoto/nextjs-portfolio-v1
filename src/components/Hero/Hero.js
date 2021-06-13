import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Bienvenido a <br />
				mi portafolio personal
			</SectionTitle>
			<SectionText>Desarrollar software de calidad es mi objetivo</SectionText>
			<Button onClick={() => (window.location = 'https://github.com/kioshiokamoto')}>Conoce que hago</Button>
		</LeftSection>
	</Section>
);

export default Hero;
