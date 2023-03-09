import Image from 'next/image'

export default function Contact(props : any) {

    const handleClick = () => {
        props.onUpdate()
    }

    return (
        <>
            <div className="modal">
                <h2>Contact</h2>
                <hr className="knight-rider-hr"></hr>
                <p className="close"
                    onClick={handleClick}>
                    ❌
                </p>
                <Image src="/phone.svg" className='milysecIcon'
                    width={50}
                    height={50}
                    alt={'Phone'}/>
                <p>
                    <a href={"tel:+61399571500"} target={"_blank"}>(03) 9957 1500</a>
                </p>

                <Image src="/email.svg"
                className='milysecIcon'
                    width={50}
                    height={50}
                    alt={'Email'}/>
                <p>
                    <a href={"mailto:we@milyesc.com"} target={"_blank"}>we@milysec.com</a>
                </p>
               <Image className='milysecIcon' src="/business.svg" width={50} height={50} alt={'Business'}/>
                <p>
                    Brickworks Shopping Centre
                    <br/>
                    Middleborough Road
                    <br/>
                    Burwood East
                </p>
                <br></br>
                <input type='button' className='closeBtn water-button'
                    value={'close'}
                    onClick={handleClick}/>
            </div>
        </>
    )

    }