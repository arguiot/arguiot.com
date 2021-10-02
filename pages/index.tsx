import { Text, Page } from '@geist-ui/react'
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from "../styles/Home.module.scss"
export default function Home() {
	return <React.Fragment>
	<NavBar />
	<Page>
		<header className={ styles.header }>
			<Text h1>Arthur <Text b>Guiot</Text></Text>
			<Text p className={ styles.text }>
				Student by day, developer by night and F1 fan on Sunday. Curious by nature, I love to discover new things, new places and new people. I create cool stuff that I share here.
			</Text>
		</header>
	</Page>
	<Footer />
	</React.Fragment>
}