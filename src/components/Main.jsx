import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Main() {

    return (
        <main className='main--section'>
            <div className='main--presentation'>
                <h3>Sebastian Cubides</h3>
                <h4>FullStack Developer</h4>
                <a href="https://github.com/danisebastian9"><FontAwesomeIcon className='main--icon' icon={faGithub} /></a><small>danisebastian9</small>
            </div>
            <div className='main--buttons'>
                <a className='main--button' id='email--button' href="cellarcuriosities@gmail.com"><FontAwesomeIcon className='main--icon fa-lg' id='email--icon' icon={faEnvelope} /> Email</a>
                <a className='main--button' id='linkedin--button' href="https://www.linkedin.com/in/daniel-sebastian-cubides-su%C3%A1rez-45b50610a"><FontAwesomeIcon className='main--icon fa-lg' icon={faLinkedin} /> LinkedIn</a>
            </div>
            <div className='main--texts'>
                <h3>About</h3>
                <p>I am a committed, empathetic, responsible, quick learner and team worker person, 
                    in continuous search for personal and professional growth. 
                    Always providing the best effort and highest quality to fulfill every task. 
                    I'm provided with strong abilities in Software Development 
                    (Front-end, Back-end), Technical Support, Customer Care, technology in general, 
                    each time seeking to improve and acquire skills.
                </p>
                <h3>Interests</h3>
                <p>Technology fanatic. Travel geek. Music lover. Food taster 
                    and last but not the least, Family passionate.</p>
            </div>
        </main>
    )
}
