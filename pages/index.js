import { Text, Spacer, Grid, Card, Description, Link, Tooltip, Tag } from '@geist-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from "../styles/Home.module.scss"
import Summary, { getContributions } from "../components/Summary"
import { getAllPosts } from '../lib/api'
import MoreStories from '../components/more-stories'
import Head from "next/head"
import Portfolio from "../components/Portfolio"
import NextLink from 'next/link'

export default function Home({ allPosts, contributions }) {
	const bubble = useRef(null)
	const name = useRef(null)
	const text = useRef(null)
	useEffect(() => {
		const setFromEvent = (e) => {
			if (bubble.current == null) return
			const el = bubble.current
			const x = e.clientX / 5 - window.innerWidth / 10
			const y = e.clientY / 5 - window.innerHeight / 10
			el.style.transform = `translate(${x}px, ${y}px )`
		}
		window.addEventListener("mousemove", setFromEvent);
	
		const rect = name.current.getBoundingClientRect()
		const animationFromEvent = (e) => {
			if (text.current == null || name.current == null) return
			const el = name.current
			el.style.position = "fixed"
			const rect = text.current.getBoundingClientRect()
			let percent = window.scrollY / 100
			if (percent < 0) { percent = 0 }
			if (percent > 1) { percent = 1 }
			let top = (rect.top - 75) * (1 - percent)
			if (top < 0) { top = 0 }
			let fontSize = 48 * (1 - percent)
			if (fontSize < 16) { fontSize = 16 }
			let fontWeight = 200 * percent + 400
			if (fontWeight < 400) { fontWeight = 400 }
			el.style.top = `${top}px`
			el.style.left = `${rect.left}px`
			el.style.fontSize = `${fontSize}px`
			el.style.fontWeight = `${fontWeight}`
		}
		window.addEventListener("scroll", animationFromEvent);
		window.addEventListener("resize", animationFromEvent);
		animationFromEvent()
		return () => {
		  window.removeEventListener("mousemove", setFromEvent);
		  window.removeEventListener("scroll", animationFromEvent);
		  window.removeEventListener("resize", animationFromEvent);
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
		<NextLink href="/" style={{ zIndex: 1000 }}>
			<h1 className={ styles.logo } ref={name}>Arthur <Text b>Guiot</Text></h1>
		</NextLink>
		<p className={ styles.text } ref={text}>
			I'm a computer science student at <a href="https://floridapoly.edu" target='_blank' style={{ color: "inherit" }}>Florida Polytechnic University</a>. I'm a passionate programmer, and I love to build things and share them with the world. Have fun learning about me and my projects!
		</p>
		<div className={ styles.bubble } ref={bubble}/>
	</header>
	<Spacer y={3} />
	<div className={ styles.layout }>
		<Summary contributions={contributions}/>
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

	let contributions = 0;
	// 2016 to now
	for (let i = new Date(2016, 0, 1); i <= new Date(); i.setFullYear(i.getFullYear() + 1)) {
		let data = await getContributions(process.env.GITHUB_TOKEN, "arguiot", i)
		contributions += data.data.user.contributionsCollection.contributionCalendar.totalContributions
	}

	return {
		props: {
			allPosts,
			contributions
		},
	}
}