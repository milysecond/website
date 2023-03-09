import {Inter} from '@next/font/google'
import Link from 'next/link';
import styles from './page.module.css'

const inter = Inter({subsets: ['latin']});
export default function terms() {

    return (
        <>
            <main className={
                styles.main
            }>

                <h1 className={
                    styles.heading
                }>Terms & Conditions
                </h1>
                <hr className="knight-rider-hr"></hr>

                <h2>
                    Use of Website
                </h2>
                <p>
                    The website is intended for lawful purposes only. You may not use the website in any manner that could damage, disable, overburden, or impair the website or interfere with any other party's use and enjoyment of the website.
                </p>
                <h2>
                    Intellectual Property
                </h2>
                <p>
                    All content included on the website, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of the website owner or its content suppliers and protected by Australian and international copyright and trademark laws.
                </p>
                <h2>
                    Limitation of Liability
                </h2>
                <p>
                    The website owner will not be liable for any damages of any kind arising from the use of the website, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
                </p>
                <h2>
                    Indemnification
                </h2>
                <p>
                    You agree to indemnify, defend, and hold harmless the website owner, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, agents, licensors, suppliers, successors, assigns, content providers, and other contractors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of your use of the website and your breach of these terms and conditions.
                </p>
                <h2>
                    Third-Party Links
                </h2>
                <p>
                    The website may contain links to other websites. The website owner is not responsible for the availability of these external sites or their contents.
                </p>
                <h2>
                    Disputes
                </h2>
                <p>
                    Any disputes arising from or related to these terms and conditions or the use of the website will be resolved through binding arbitration in accordance with the rules of the Australian Arbitration Association.
                </p>
                <h2>
                    Governing Law
                </h2>
                <p>
                    These terms and conditions will be governed by and construed in accordance with the laws of the state of Australia, without giving effect to any principles of conflicts of law.
                </p>
                <h2>
                    Changes to Terms and Conditions
                </h2>
                <p>
                    The website owner reserves the right to change these terms and conditions at any time without prior notice. Your continued use of the website following any changes to these terms and conditions constitutes your acceptance of the new terms and conditions.
                </p>
                <Link href={'/'}>
                    <input type='button' className='closeBtn water-button'
                        value={'back'}/>
                </Link>
            </main>
        </>

    )
}
