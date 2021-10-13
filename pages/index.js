import { Text, Page, Spacer } from '@geist-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from "../styles/Home.module.scss"
import Summary from "../components/Summary"

export default function Home() {
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
	<NavBar />
	<header className={ styles.header } >
		<Text h1>Arthur <Text b>Guiot</Text></Text>
		<Text p className={ styles.text }>
			Student by day, developer by night and F1 fan on Sunday. Curious by nature, I love to discover new things, new places and new people. I create cool stuff that I share here.
		</Text>
		<div className={ styles.bubble } ref={bubble}/>
	</header>
	<Spacer y={3} />
	<Page>
		<Summary />
	</Page>
	<Footer />
	</React.Fragment>
}