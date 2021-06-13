import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Tecnologías</SectionTitle>
		<SectionText>Me especializo en desarrollo web, actualmente veo backend y frontend</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-end</ListTitle>
					<ListParagraph>
						Experiencia con <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiNodejs size="3rem" />
				<ListContainer>
					<ListTitle>Back-end</ListTitle>
					<ListParagraph>
						Experiencia con <br />
						Node.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Bases de datos</ListTitle>
					<ListParagraph>
						Experiencia con <br />
						MySql, MSQL y Postgres
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
