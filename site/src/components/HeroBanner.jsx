import * as FaIcons from 'react-icons/fa'
const HeroBanner = () => {
  return (
    <div className="hero-container text-center">
        <h1>Simply the best milktea chain in the country</h1>
        <p id="subtitle">Indulge in Pure Bliss with Our Exquisite Milktea Creations!</p>

        <div className="social-container d-flex justify-content-center">
            <p>follow us:</p>
            <div className="socials">
                <span className="mx-4 icons"><FaIcons.FaFacebookF /></span>
                <span className="icons"><FaIcons.FaInstagram /></span>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner