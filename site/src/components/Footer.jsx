import icon from '../../dist/assets/wings-icon.png'

const Footer = () => {
  return (
    <div className="footer fixed-bottom text-center py-2 d-flex flex-column align-items-center">
        <img src={icon} alt="wings-icon" width="50px" height="50px"/>
        <a href="https://wings-united.netlify.app" target="_blank" rel="noreferrer" className="text-warning">Wings United</a>
        <small >Copyright &copy; {new Date().getFullYear()} | Sago</small>
    </div>
  )
}

export default Footer