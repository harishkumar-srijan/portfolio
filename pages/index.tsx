import dynamic from 'next/dynamic';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const Projects = dynamic(() => import('../containers/Projects'));
const GithubProfileCard = dynamic(
	() => import('../components/GithubProfileCard')
);
import { openSource, showContactUs } from '../portfolio';
import SEO from '../components/SEO';
import Contact from '../components/ContactUs';
import { GithubUserType } from '../types';

export default function Home({
	githubProfileData,
}: {
	githubProfileData: any;
}) {
	return (
		<div>
			<SEO />
			<Navigation />
			<Greetings />
			<Skills />
			<Education />
			<Experience />
			<Projects />
			{showContactUs ? <Contact /> : null}
			<GithubProfileCard {...githubProfileData} />
		</div>
	);
}

export async function getStaticProps() {
	const githubProfileData: GithubUserType = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
