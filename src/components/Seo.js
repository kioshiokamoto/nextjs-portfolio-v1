import React from 'react';
import Head from 'next/head';

export default function SEO({
	description = 'Me llamo Kioshi Okamoto, estudio ingeniería de software. Apasionado por aprender cada día un poco más de desarrollo web',
	author = 'Kioshi Okamoto',
	meta,
	title = 'Kioshi Okamoto',
}) {
	const metaData = [
		{
			name: `description`,
			content: description,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: description,
		},
		{
			property: `og:type`,
			content: `website`,
		},
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: author,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: description,
		},
	].concat(meta);

	return (
		<Head>
			<title>{title}</title>
			{metaData.map(({ name, content }, i) => (
				<meta key={i} name={name} content={content} />
			))}
			<meta name="keywords" content="software,Kioshi Okamoto,unmsm,javascript,programming" />
		</Head>
	);
}

SEO.defaultProps = {
	lang: `es`,
	meta: [],
};
