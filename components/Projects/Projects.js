import React from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Image from 'next/image';
const Projects = () => (
	<Section nopadding={true} id="projects">
		<SectionDivider />
		<SectionTitle main={true}>Proyectos</SectionTitle>
		<GridContainer>
			{projects.map(({ id, image, title, description, source = '', visit = '', tags }) => (
				<BlogCard key={id}>
					<Image src={image} width={400} height={225} objectFit="cover" alt={title} />

					<TitleContent>
						<HeaderThree title={1}>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<div>
						<br />
						<TitleContent>Stack</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						{source && (
							<ExternalLinks href={source} target="_blank" rel="noreferrer" aria-label={title}>
								Código
							</ExternalLinks>
						)}
						{visit && (
							<ExternalLinks href={visit} target="_blank" rel="noreferrer" aria-label={title}>
								Vista previa
							</ExternalLinks>
						)}
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;
