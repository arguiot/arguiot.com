import { Text, Spacer, Grid, Card, Description, Link, Tooltip, Tag } from '@geist-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from "../styles/Home.module.scss"
import Summary from "../components/Summary"
import { getAllPosts } from '../lib/api'
import MoreStories from '../components/more-stories'
import Head from "next/head"
import Portfolio from "../components/Portfolio"

export default function Home({ allPosts }) {
	const bubble = useRef(null)
	useEffect(() => {
		const setFromEvent = (e) => {
			const el = bubble.current
			const x = e.clientX / 5 - window.innerWidth / 10
			const y = e.clientY / 5 - window.innerHeight / 10
			el.style.transform = `translate(${x}px, ${y}px )`
		}
		window.addEventListener("mousemove", setFromEvent);
	
		return () => {
		  window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	return <React.Fragment>
	<Head>
		<title>
			Arthur Guiot
		</title>
		<meta property="og:image" content="/og-image.jpg" />
	</Head>
	<NavBar />
	<header className={ styles.header } >
		<Text h1 style={{ fontWeight: "normal" }}>Arthur <Text b>Guiot</Text></Text>
		<Text p className={ styles.text }>
			I'm a computer science student at <a href="https://floridapoly.edu" target='_blank' style={{ color: "inherit" }}>Florida Polytechnic University</a>. I'm a passionate programmer, and I love to build things and share them with the world. Have fun learning about me and my projects!
		</Text>
		<div className={ styles.bubble } ref={bubble}/>
	</header>
	<Spacer y={3} />
	<div className={ styles.layout }>
		<Summary />
		<Spacer h={5} />
		<Portfolio />
		<Spacer h={5} />
		{allPosts.length > 0 && <MoreStories posts={allPosts} />}
		<Text h1>Say Hi!</Text>
		<Text h3>Shoot me an email, reach out on social media, or send a carrier pigeon. Regardless of how, I’d love to get in touch.</Text>
		<Spacer h={3} />
		<Grid.Container gap={2}>
			<Grid xs={24} md={8}>
				<Card>
					<Text>Want my services? It's here:</Text>
					<Description title="Agency" content={<Link href="https://pr1mer.tech" color underline target="_blank">pr1mer.tech</Link>} />
				</Card>
			</Grid>
			<Grid xs={24} md={8}>
				<Card>
					<Text>Want to learn about me? Read my CV!</Text>
					<Description title="Resume" content={<><Link href="/resume.pdf" color underline >English</Link> | <Link href="/resume-fr.pdf" color underline >French</Link></>} />
				</Card>
			</Grid>
			<Grid xs={24} md={8}>
				<Card>
					<Text>Feel generous? Send some Crypto!</Text>
					<Description title="Ethereum Adress" content={<Tooltip text="Ethereum Mainnet & Polygon compatible"><Link href="https://etherscan.io/address/0x492804D7740150378BE8d4bBF8ce012C5497DeA9" color underline target="_blank">0x4928...DeA9</Link></Tooltip>} />
				</Card>
			</Grid>
		</Grid.Container>
	</div>
	<Footer />
	</React.Fragment>
}

export async function getStaticProps() {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
		'external'
	])

	return {
		props: {
			allPosts
		},
	}
}