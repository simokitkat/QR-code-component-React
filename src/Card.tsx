import img1 from './images/image-qr-code.png';

const Card = () => {
  return (
    <section className="card">
        <img src={img1} alt="QR-Code" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </section>
  )
}

export default Card