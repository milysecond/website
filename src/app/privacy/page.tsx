import {Inter} from '@next/font/google'
import Link from 'next/link';
import styles from './page.module.css'

const inter = Inter({subsets: ['latin']});

export default function privacy() {

    return (
        <>
            <main className={
                styles.main
            }>
                <h1 className={styles.heading}>Privacy Policy
                </h1>
                <hr className="knight-rider-hr"></hr>
                <p>
                    Milysec Pty Ltd is committed to protecting the privacy and personal information of our customers, clients, and website users. This Privacy Policy outlines how we collect, use, store, and share personal information, as well as the rights of individuals in relation to their personal information.
                </p>
                <h2>
                    Collection of Personal Information
                </h2>
                <p>

                    We may collect personal information directly from you or from third-party sources, including but not limited to your name, contact details, payment information, and other information relevant to our products or services. We collect this information to provide better services and to improve our products.
                </p>
                <h2>
                    Use of Personal Information
                </h2>
                <p>
                    The personal information we collect is used to provide you with the products and services you have requested, to process transactions, to respond to inquiries, and to improve our products and services. We may also use your personal information to send you updates, news, and promotional materials.
                </p>
                <h2>
                    Storage of Personal Information
                </h2>
                <p>
                    We store personal information in a secure environment and take appropriate measures to protect it from unauthorized access, disclosure, alteration, or destruction. We also retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law.
                </p>
                <h2>
                    Sharing of Personal Information
                </h2>
                <p>
                    We do not share, sell, or rent personal information to third parties for their marketing purposes. We may share personal information with third parties for the purpose of providing our products and services, such as service providers and business partners, but only with the necessary information required to perform these services.
                </p>
                <h2>
                    Rights of Individuals
                </h2>
                <p>
                    Under the Australian Privacy Act 1988, individuals have the right to access, correct, and update their personal information. You may request access to your personal information by contacting us using the details provided below. If you believe that any personal information we hold about you is inaccurate, you may request that we correct it.
                </p>
                <h2>
                    Contact Information
                </h2>
                <p>
                    If you have any questions about this Privacy Policy or if you wish to access or correct your personal information, please contact us at [insert contact information].
                </p>
                <h2>
                    Updates to Privacy Policy
                </h2>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes to our practices or to comply with legal requirements. We will publish any changes on our website and, where appropriate, notify you by email.
                </p>
                <Link href={'/'}>
                    <input type='button' className='closeBtn water-button'
                        value={'back'}/>
                </Link>
            </main>

        </>

    )
}
