import styles from '../styles/NavBar.module.scss'
import { Link, Text, useModal } from '@geist-ui/react'
import NextLink from 'next/link'
import React from "react";

function NavBar() {
    const [state, setState] = React.useState(false)
    const toggle = () => setState(state => !state)
    const close = () => setState(false)
    const menuToggleClass = [styles.menuToggle, state ? styles.cross : ""].join(" ")
    
    return <div className={ styles.nav }>
                <NextLink href="/">
                    <Text b className={ styles.logo }>Arthur <span className={ styles.lastName } >Guiot</span></Text>
                </NextLink>
                <div className={ styles.menuContainer } style={{ display: state ? "flex" : "none" }}>
                    <NextLink href="/about">
                        <Text b><Link underline onClick={ close }>About</Link></Text>
                    </NextLink>
                    <NextLink href="/contact">
                        <Text b><Link underline onClick={ close } href="mailto:arguiot@gmail.com">Contact</Link></Text>
                    </NextLink>
                </div>
                <div className={ menuToggleClass } onClick={ toggle }>
                    <div className={ styles.l }></div>
                    <div className={ styles.l }></div>
                    <div className={ styles.l }></div>
                </div>
            </div>
}

export default NavBar