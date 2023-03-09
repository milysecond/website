import Link from 'next/link'

export default function Footer(){
    return (
        <footer>
        <p>

            Milysec Pty Ltd © {
            new Date().getFullYear()
        }
            <br/>
            <Link href={'/privacy'}>Privacy
            </Link>
            {' | '}
            <Link href={'/terms'}>Terms
            </Link>
        </p>
    </footer>
    )
}