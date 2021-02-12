import Container from "../Container"
import './Footer.css'
import fb from '../../assets/fb.png'
import int from '../../assets/int.png'
import yt from '../../assets/yt.png'
import tt from '../../assets/twitter.png'
import logo from '../../assets/logoBee.png'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="content-footer">
            <img src={logo} alt="Logo do Grupo Bee no rodapé"/>
            <ul>
              <li><a href=""><img src={fb} alt=""/></a></li>
              <li><a href=""><img src={yt} alt=""/></a></li>
              <li><a href=""><img src={tt} alt=""/></a></li>
              <li><a href=""><img src={int} alt=""/></a></li>
            </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;