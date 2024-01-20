import * as FaIcons from 'react-icons/fa'
const HeroBanner = () => {
  return (
    <div className="hero-container text-center">
        <h1>Simply the best milktea chain in the country</h1>
        <p id="subtitle">Indulge in Pure Bliss with Our Exquisite Milktea Creations!</p>

        <div className="social-container d-flex justify-content-center">
            <p>follow us:</p>
            <div className="socials">
                <a href="https://www.facebook.com/yoursago" className="mx-4 icons"><FaIcons.FaFacebookF /></a>
                <a href="https://www.instagram.com/yoursago/" className="icons"><FaIcons.FaInstagram /></a>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner