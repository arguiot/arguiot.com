import styles from '../styles/NavBar.module.scss'
import { Link, Text, useModal } from '@geist-ui/react'
import NextLink from 'next/link'
import React, { useEffect } from "react";
import { useRouter } from 'next/dist/client/router';

function NavBar() {
    const router = useRouter()
    const [state, setState] = React.useState(false)
    const toggle = () => setState(state => !state)
    const close = () => setState(false)
    const menuToggleClass = [styles.menuToggle, state ? styles.cross : ""].join(" ")
    
    const [opaque, setOpaque] = React.useState(false)
    useEffect(() => {
        window.onscroll = () => {
            const y = document.documentElement.scrollTop || document.body.scrollTop
            if (y >= 100) {
                setOpaque(true)
            } else if (y < 100) {
                setOpaque(false)
            }
        }
    }, [])
    const navClass = [styles.nav, opaque ? styles.opaque : ""].join(" ")

    return <div className={ navClass }>
                { router.pathname !== "/" &&
                    <NextLink href="/">
                    <a><Text b className={ styles.logo }>Arthur <span className={ styles.lastName } >Guiot</span></Text></a>
                </NextLink>
        }
                <div className={ styles.menuContainer } style={{ display: state ? "flex" : "none" }}>
                    <Text b><Link href="https://pr1mer.tech" underline onClick={ close } target="_blank">Services</Link></Text>
                    <Text b><Link href="https://projects.arguiot.com" underline onClick={ close } target="_blank">OSS</Link></Text>
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