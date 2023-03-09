import localFont from '@next/font/local'
const nasa = localFont({src: 'nasa.otf'})

export default function Logo() {

    return (

        <h1 className={
            nasa.className
        }>MILYSEC
        <span className="logo">:</span>
        </h1>
    )
}
