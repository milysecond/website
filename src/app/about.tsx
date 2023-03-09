export default function About(props:any) {

    const handleClick = () => {
        props.onUpdate()
    }
    return (
        <div className="modal">
            <h2>About</h2>
            <hr className="knight-rider-hr" />
            <br/>
            <p className="close" onClick={handleClick}>
                ❌
            </p>
            <p>
            Milysec Consultants are web development experts specializing in creating high-quality, user-friendly websites.<br/> Our team of professionals combines technical expertise with creative flair to deliver unique and engaging websites that enhance your online presence and boost your search engine optimization.<br/> With a focus on delivering results, Milysec Consultants will work closely with you to understand your business needs and develop a customized solution that meets your specific requirements.<br/> Get in touch with us today and take your website to the next level!
            </p>
            <br/>
            <input type='button' className='closeBtn water-button' value={'close'} onClick={handleClick} />

        </div>
    )
}
