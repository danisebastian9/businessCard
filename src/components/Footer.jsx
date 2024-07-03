import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="footer--icons">
            <a href="https://facebook.com"><FontAwesomeIcon className='footer--icon fa-2xl' icon={faSquareFacebook} /></a>
            <a href="https://instagram.com"><FontAwesomeIcon className='footer--icon fa-2xl' icon={faSquareInstagram} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon className='footer--icon fa-2xl' icon={faSquareXTwitter} /></a>
        </footer>
    )
}