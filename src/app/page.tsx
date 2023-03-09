'use client' 

import Image from 'next/image'
import {Inter} from '@next/font/google'
import Footer from './footer'
import styles from './page.module.css'
import Link from 'next/link'
import About from './about'
import Contact from './contact'
import React from 'react'
import Logo from './Logo'

export default function Home() {

    const [showAbout, setShowAbout] = React.useState(false)
    const [showContact, setShowContact] = React.useState(false)

    const handleClose = () => {
        setShowAbout(false)
        setShowContact(false)
    }

    return (
        <>
        <main className={
            styles.main
        }>
            <Logo/>
            <Image priority className='astro' src="/astronaut.png"
                width={200}
                height={200}
                alt={'Astronaut on Mars'}/>

            <span className={styles.typewriter}>Fast, Web, App, Development</span>
            <input type='button' className={styles.grow + ' water-button'}
                onClick={
                    () => {
                        setShowAbout(!showAbout)
                    }
                }
                value={'About'}/> {
            showAbout && <About showAbout={showAbout}
                onUpdate={handleClose}/>
        }

            <Link href={'https://blog.milysec.com'} target="_blank">
                <input type='button' className={styles.grow +' water-button'}
                    value={'Blog'}/>
            </Link>

            <input type='button' className={styles.grow +' water-button'}
                onClick={
                    () => setShowContact(!showContact)
                }
                value={'Contact'}/> {
            showContact && <Contact showContact={showContact}
                onUpdate={handleClose}/>
        } 
        <Footer/>
        </main>
        </>
    )
}
